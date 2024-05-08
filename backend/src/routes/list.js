import { Router } from 'express';
import { User } from '../models/user.model.js';
import { Todos } from '../models/todo.model.js';
import { userMiddleware } from '../middlewares/user.middleware.js';
import { todoMiddleware } from '../middlewares/todo.middleware.js';

const router = Router();

// create
router.post('/addTodo', userMiddleware, async (req, res) => {
    try {
        const {title, description, id} = req.body;
        const existingUser = await User.findById(id)

        const list = new Todos({title, description, user: existingUser})
        await list.save()

        existingUser.todoList = existingUser.todoList || []
    
        existingUser.todoList.push(list);   
        await existingUser.save();

        return res.status(200).json({list});
    } catch(error) {
        console.log(error)
        return res.status(400).json({msg: "Error while adding todo"})   
    }
}) 

//  update
router.put('/updateTodo/:id',userMiddleware, todoMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;
   
        const newTodo = await Todos.findByIdAndUpdate(req.params.id, {title, description});
        newTodo.save();

        return res.status(200).json({msg: "Todo updated"})
    } catch(error) {
        return res.status(400).json({msg: "Error while updating todo"})
    }
})

// delete 
router.delete('/deleteTodo/:id', userMiddleware, todoMiddleware,async (req, res) => {
    
    try {
        const todoId = req.params.id;
        
        const todoToBeDeleted = await Todos.findByIdAndDelete(todoId);

        if(!todoToBeDeleted) {
            return res.status(404).json({msg: "Todo not found"})
        }

        const email = req.body.email;
        await User.findOneAndUpdate({email}, { $pull: {todoList: todoId}})
        
        return res.status(200).json({msg: "Todo deleted successfully"})
    
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Error while deleting todo", error: error.message})
    }
    
})

// get todo
router.get('/todos/:id', async (req, res) => {
    const userId = req.params.id;
    
    // store all todos in todoList for a given userId
    const todoList = await Todos.find({user: userId}).sort({ createdAt: -1 })
    if(todoList.length !== 0) {
        return res.status(200).json({ todoList })
    } else {
        return res.status(200).json({msg: "No todo" })
    }
} )

export default router;

