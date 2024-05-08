import { useEffect, useRef, useState } from "react"
import "./../../../src/index.css"
import "./Todos.css"
import { errorSelector, useRecoilState } from "recoil";
import { updateStateAtom, todoDescriptionAtom, todoListAtom, todoTitleAtom, refreshTodoAtom } from "../../atoms/atoms.jsx";
import { TodoCard } from "../../components/todo/TodoCard.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Update } from "../../components/todo/Update.jsx";
import axios from "axios";

export function Todos() {

    const textareaRef = useRef(null);
    const [title,setTitle] = useRecoilState(todoTitleAtom);
    const [description, setDescription] = useRecoilState(todoDescriptionAtom)
    const [todos, setTodos] = useRecoilState(todoListAtom)

    const id = sessionStorage.getItem("id")

    // handle display of textarea (description)
    const handleClick = () =>  {
        if(textareaRef.current) {
            textareaRef.current.style.display = "block"
        }
    }

    // to save todo
    const handleSubmit = async () => {
        // check if inputs are empty
        if(!title.trim() && !description.trim()) {
            toast.error("Input cannot be empty")
            return;
        }
        else if(id) {
            await axios.post("http://localhost:3000/api/v2/addTodo", { title, description, id})
            .then(function(response) {
                // console.log(response.data.list);
                // console.log(response);
                setTodos([response.data.list, ...todos])
                setTitle("")
                setDescription("")
                toast.success("Your task has been added!!")
                    })
            .catch(function(error) {
                console.log("Error while saving todo", error)
            })
        }
        else {
            setTodos([{title, description}, ...todos])
            setTitle("")
            setDescription("")
            toast.success("Your task is not saved. Please SignUp or Login")
            }
    }

    // to delete todos
    const deleteFunction = async (todoId) => {
        // console.log(id, todoId)
        await axios.delete(`http://localhost:3000/api/v2/deleteTodo/${todoId}`, {data: {id: id}})
        .then(function(response) {
            const updatedTodos = todos.filter(todo => todo._id !== todoId);
            setTodos(updatedTodos);
            toast.success("todo deleted successfully!!")    
        })
    };

    // to handle update
    const [updateVisible, setUpdateVisible] = useRecoilState(updateStateAtom);

    const toggleUpdate = () => {
    setUpdateVisible(!updateVisible);
}

    // fetching todo
    useEffect(() => {
        const fetchTodo = async () => {
            axios.get(`http://localhost:3000/api/v2/todos/${id}`)
            .then(function(response) {
                setTodos(response.data.todoList)
            })
        }
        fetchTodo();
    }, [])


    return (
        <>
            <div className="todo">
                <ToastContainer autoClose={2000}/>
                <div className='todo-container v-flex'>
                    <div className="todo-input-container v-flex card">
                        <input type="text" placeholder="Enter title" name="title" value={title} 
                        onChange={e => setTitle(e.target.value)}
                        onClick={handleClick}/>

                        <textarea type="text" placeholder="Enter description" name="description" value={description} ref={textareaRef} style={{ display: "none"}}
                        onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="add-todo-btn-container">
                        <button className="signup-btn add-todo-btn flex" onClick={handleSubmit}>Add Todo</button>
                    </div> 
                </div>

                <div className="todo-body">
                    <div className="todo-body-container">
                        <div className="todo-card-container">
                        {todos && todos.map((todo, index) => (
                                (todo.title && todo.description) ? 
                                    <div className="todo-card" key={index}> 
                                        <TodoCard title={todo.title} description={todo.description} id={todo._id} deleteTodo={deleteFunction} toggleUpdate={toggleUpdate}/>
                                    </div>
                                : null
                            ))}
                        </div>
                    </div>
                </div>

                {updateVisible && 
                <div className="todo-update-container">
                    <Update toggleUpdate={toggleUpdate}/>
                </div>
                }

            </div>
        
        </>
        
    )
}