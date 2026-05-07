
import { Left } from "./assets/Left";
import { BookPlus } from "lucide-react";
export default function App(){
  return (
    <div className="flex gap-2-">
      <Left/>
      <Main/>
    </div>
  )
}

let tasks:string[] = []
let addTask = document.getElementById('add-task')

function Main() {
  return(
    <div className="flex flex-col p-10 gap-10">
      <h1 className="font-bold text-5xl text-amber-50 ">Today's Tasks: </h1>
      <Taskcontainer/>
    </div>
  )
}

function Taskcontainer(){
  return(
    <div className= "flex flex-col p-2 w-2xl h-auto gap-2 rounded-2xl text-white" id = "add-task">
      <form>
        <div className="flex text-3xl items-center transition-transform hover:bg-zinc-600 cursor-pointer rounded-2xl w-fit hover:scale-110 hover:p-2 ">Add a task <BookPlus/></div>
        <ul className="list-disc list-inside text-2xl">
          <li>OI</li>
          <li>Learn typescript and shiii</li>
          <input className= "w-5xl bg-zinc-600 rounded-md outline-none focus-visible: ring-2 focus-visible: ring-violet-600"></input>
        </ul>
      </form>
    </div>
  )
}


