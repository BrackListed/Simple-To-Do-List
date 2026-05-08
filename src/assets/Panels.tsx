import {Notebook, Calendar, RefreshCcw} from 'lucide-react';
export function Panels(){
  return(
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-110 rounded-md hover: cursor-pointer">
        <Notebook/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Plans</a>
      </div>

      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer">
        <Calendar/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Calendar</a>
      </div>

      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer" >
        <RefreshCcw/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Habits</a>
      </div>
    </div>
  )
}