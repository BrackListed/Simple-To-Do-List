import { BookPlus } from "lucide-react"

let tasks = [
    {id: 1, name: "Get Practice with Typescript"},
    {id: 2, name: "Get Practice with React"},
    {id: 3, name: "Get Practice with Tailwind CSS"},
]


export function Taskcontainer(){
  return(
    <div className= "flex flex-col p-2 w-2xl h-auto gap-2 rounded-2xl text-white" id = "add-task">
      <form>
        <div className="flex text-3xl items-center transition-transform hover:bg-zinc-600 cursor-pointer rounded-2xl w-fit hover:scale-110 hover:p-2 ">Add a task <BookPlus/></div>
        <ul className="list-disc list-inside text-2xl">
            {tasks.map((task) => (
                <li>{task.name}</li>
            ))}
            <input className= "w-5xl bg-zinc-600 rounded-md outline-none focus-visible: ring-2 focus-visible: ring-violet-600"></input>
        </ul>
        
      </form>
    </div>
  )
}