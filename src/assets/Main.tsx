import { Taskcontainer } from "./Taskcontainer";

export function Main() {
  return(
    <div className="flex flex-col p-10 gap-10">
      <h1 className="font-bold text-5xl text-amber-50 ">Today's Tasks: </h1>
      <Taskcontainer/>
    </div>
  )
}