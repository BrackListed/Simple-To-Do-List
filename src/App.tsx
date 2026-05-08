
import { Left } from "./assets/Left";
import { Taskcontainer } from "./assets/Taskcontainer";
export default function App(){
  return (
    <div className="flex gap-2-">
      <Left/>
      <Main/>
    </div>
  )
}


function Main() {
  return(
    <div className="flex flex-col p-10 gap-10">
      <h1 className="font-bold text-5xl text-amber-50 ">Today's Tasks: </h1>
      <Taskcontainer/>
    </div>
  )
}




