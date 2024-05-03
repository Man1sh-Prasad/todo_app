import './TodoCard.css'
import '../../../src/index.css'

export function TodoCard({title, description, id, deleteTodo, toggleUpdate}) {
    return (
        <div className="todoCard">
            <div className='todo-content'>
            <h5 className="todo-card-title">{title}</h5>
                <p className="todo-card-description">
                    {description.split("", 80)}...</p>
            </div>
                
        
            <div className="option-container">
            <div>
                    <i className="fa-solid fa-pen-to-square" onClick={toggleUpdate}></i>
                </div>
                <div>
                <i className="fa-solid fa-trash" onClick={() => {
                    deleteTodo(id)
                }}></i>
                </div>
            </div>
        </div>
    )
}