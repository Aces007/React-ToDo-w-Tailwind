const Board = ( {task, index, taskList, setTaskList} ) => {
    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center max-w-xs border rounded-lg hover:bg-sky-200">
                <p>{task}</p>
                <button className="bg-red-500 border-2 border-black rounded-md p-1 my-4 w-20 hover:bg-red-600 hover:text-white" onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}


export default Board;