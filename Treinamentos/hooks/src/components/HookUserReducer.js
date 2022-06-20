import {useReducer, useState} from 'react'
import Styles from './HookUserReduce.module.css'

const HookUserReducer = () => {
    const [number, dispatch] = useReducer((state, action) =>{
        return Math.random(state);
    })

    const initialTask =[
        {id: 1, text: "text1"},
        {id: 2, text: "text2"},
        {id: 3, text: "text3"}
    ]

    const taskReducer=(state, action)=>{
        switch(action.type){
            case "ADD":
                const newTask = {
                    
                }
        }
    };



    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask);


    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatchTasks()
    }



  return (
    <>

        <h1>tarefas:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task)=> (
            <li key={task.id} >{task.text}</li>
        ))}
               
    </>
    
  )
}

export default HookUserReducer