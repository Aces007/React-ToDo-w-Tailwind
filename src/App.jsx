import { useState } from 'react'
import './index.css'
import Input from './components/Input'
import Board from './components/Board'

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList)

  return (
    <div className='px-12'>
    <div className='flex flex-col items-center justify-center py-8 gap-4'>
      <h1 className='font-mono text-5xl my-8'>To-Do Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList}/>
    </div>
      <div className='flex flex-col gap-x-2 gap-y-10 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12'>
        {taskList.map((task, index) =>
          <Board 
            key={index} 
            index={index}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        )}
      </div>
    </div>
  )
}

export default App
