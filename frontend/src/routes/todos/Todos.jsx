import { useRef } from "react"
import "./../../../src/index.css"
import "./Todos.css"
import { useRecoilState } from "recoil";
import { todoDescriptionAtom, todoListAtom, todoTitleAtom } from "../../atoms/atoms.jsx";
import { TodoCard } from "../../components/todo/TodoCard.jsx";

export function Todos() {

    const textareaRef = useRef(null);
    const [title,setTitle] = useRecoilState(todoTitleAtom);
    const [description, setDescription] = useRecoilState(todoDescriptionAtom)
    const [todos, setTodos] = useRecoilState(todoListAtom)

    const handleClick = () =>  {
        if(textareaRef.current) {
            textareaRef.current.style.display = "block"
        }
    }

    const handleSubmit = () => {
        setTodos([...todos, {title, description}])
        setTitle("")
        setDescription("")
        
    }

    return (
        <div className="todo">
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
                                    <TodoCard title={item.title} description={item.description}/>
                                </div>
                            : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}