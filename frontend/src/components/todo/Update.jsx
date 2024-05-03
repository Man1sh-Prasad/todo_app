// import { useRecoilState } from "recoil"
// import { todoDescriptionAtom, todoTitleAtom, todoListAtom } from "../../atoms/atoms.jsx"
// import { toast } from "react-toastify";


export function Update({ toggleUpdate,  }) {

    // const [title, setTitle] = useRecoilState(todoTitleAtom);
    // const [description, setDescription] = useRecoilState(todoDescriptionAtom)
    // const [todos, setTodos] = useRecoilState(todoListAtom)

    // const handleUpdate = () => {
    //     if(!title.trim() && !description.trim()) {
    //         toast.error("empty input")
    //     }
    //     setTodos([{title, description}, ...todos])
    //     setDescription("")
    //     setTitle("")
    //     toggleUpdate();
    // }

    return (
        <div className="update-container v-flex">
            <h3>Update Todo</h3>
            
            <input type="text" placeholder="Enter title" name="title" value={title} 
            onChange={e => setTitle(e.target.value)}
            />

            <textarea type="text" placeholder="Enter description" name="description" value={description}
            onChange={e => setDescription(e.target.value)}
            />

            <div className="update-btn-container h-flex">
                <button className="update-close-btn" onClick={toggleUpdate}>Close</button>
                <button className="update-btn" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}