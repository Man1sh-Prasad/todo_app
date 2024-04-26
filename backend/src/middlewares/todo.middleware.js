import { Todos } from "../models/todo.model.js";
import { isValidObjectId } from "mongoose";

export async function todoMiddleware(req, res, next) {
    try {
        // Check if todo with given id exists 
        const todoId = req.params.id;

        // check if todoId is valid objectId
        if (!isValidObjectId(todoId)) {
            return res.status(400).json({ msg: "Invalid todo ID format" });
        }

        const existingTodo = await Todos.findById(todoId);

        // If todo doesn't exist, return a 404 Not Found response
        if (!existingTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        // If todo exists, proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle any unexpected errors
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
