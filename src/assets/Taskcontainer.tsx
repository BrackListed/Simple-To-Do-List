import { BookPlus } from "lucide-react"
import { useRef, useState } from "react"



export function Taskcontainer(){
    const [tasks, setTask]= useState(JSON.parse(localStorage.getItem("task-storage") ?? "[]"))
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
  return(
    <div className= "flex flex-col p-2 w-2xl h-auto gap-2 rounded-2xl text-white" id = "add-task">
      <div className="flex flex-col gap-10">
        <div className="flex text-3xl items-center transition-transform hover:bg-zinc-600 cursor-pointer rounded-2xl w-fit hover:scale-105 hover:p-2" onClick={() => setShowInput(true)}>
            Add a task 
            <BookPlus/>
        </div>
        {tasks.length === 0 && <h1 className = "text-2xl">No tasks yet. Add one to get started!</h1>}
        <ul className="list-disc list-inside text-2xl">
            {tasks.map((userTask:string) => (
                <li>{userTask}</li>
            ))}
            {showInput && <input ref = {inputRef} className= "w-5xl bg-zinc-600 rounded-md outline-none focus-visible: ring-2 focus-visible: ring-violet-600" onKeyDown = {(e) =>{
                if(e.key === "Enter"){
                    let newTask = (e.target as HTMLInputElement).value
                    setTask([...tasks, newTask])
                    localStorage.setItem("task-storage", JSON.stringify(tasks))
                    setShowInput(false)
                } 
            }} onBlur={() => {
                inputRef.current!.value = "" 
            }}></input>}
        </ul>
        
        
      </div>
    </div>
  )

}
