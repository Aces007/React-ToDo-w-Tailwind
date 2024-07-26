import { useState } from "react"


const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")

    const handleAddTask = (e) => {
        e.preventDefault()
        setTaskList([...taskList, input]);
        setInput("");
    }
    
    return (
        <>
            <form className="flex flex-row justify-center gap-4 my-8">
                <input 
                    type="text" 
                    placeholder="Add a task"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAddTask} className="border-2 border-black rounded-md p-1 w-24 hover:bg-sky-200">Add</button>
            </form>
        </>
    )
}


export default Input