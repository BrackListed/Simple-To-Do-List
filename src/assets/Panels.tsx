import {Notebook, Calendar, RefreshCcw} from 'lucide-react';
export function Panels(){
  return(
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-105 rounded-2xl">
        <Notebook/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Plans</a>
      </div>

      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-105">
        <Calendar/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Calendar</a>
      </div>

      <div className="flex gap-3 transition-transform hover:bg-gray-200 hover:scale-105 rounded-2xl" >
        <RefreshCcw/>
        <a href = "" target = "_blank" rel = "noreferrer noopener">Habits</a>
      </div>
    </div>
  )
}