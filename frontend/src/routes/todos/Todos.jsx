import { useRef } from "react"
import "./../../../src/index.css"
import "./Todos.css"
import { useRecoilState } from "recoil";
import { updateStateAtom, todoDescriptionAtom, todoListAtom, todoTitleAtom } from "../../atoms/atoms.jsx";
import { TodoCard } from "../../components/todo/TodoCard.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Update } from "../../components/todo/Update.jsx";

export function Todos() {

    const textareaRef = useRef(null);
    const [title,setTitle] = useRecoilState(todoTitleAtom);
    const [description, setDescription] = useRecoilState(todoDescriptionAtom)
    const [todos, setTodos] = useRecoilState(todoListAtom)

    // handle display of textarea (description)
    const handleClick = () =>  {
        if(textareaRef.current) {
            textareaRef.current.style.display = "block"
        }
    }

    // to save todo
    const handleSubmit = () => {
        // check if inputs are empty
        if(!title.trim() && !description.trim()) {
            toast.error("Input cannot be empty")
            return;
        }
        setTodos([{title, description}, ...todos])
        setTitle("")
        setDescription("")
        toast.success("Your task has been added!!")
    }

    // to delete todos
    const deleteFunction = (id) => {
        console.log(id)
        const updatedTodos = todos.filter((todo, index) => index !== id);
        setTodos(updatedTodos);
    };

    // to handle update
    const [updateVisible, setUpdateVisible] = useRecoilState(updateStateAtom);

    const toggleUpdate = () => {
    setUpdateVisible(!updateVisible);
}

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
                        {todos.map((item, index) => (
                                (item.title && item.description) ? 
                                    <div className="todo-card" key={index}> 
                                        <TodoCard title={item.title} description={item.description} id={index} deleteTodo={deleteFunction} toggleUpdate={toggleUpdate}/>
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