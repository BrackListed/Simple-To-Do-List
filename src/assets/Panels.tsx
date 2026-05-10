import {Notebook, Calendar, RefreshCcw} from 'lucide-react';
import { Link } from 'react-router-dom';
export function Panels(){
  return(
    <div className="flex flex-col gap-3 p-3">
      <div className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover: cursor-pointer hover:p-2">
        <Notebook/>
        <Link to ="/Plans">Plans</Link>
      </div>

      <div className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer hover:p-2">
        <Calendar/>
        <Link to ="/Calendar">Calendar</Link>
      </div>

      <div className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer hover:p-2" >
        <RefreshCcw/>
        <Link to ="/Habits">Habits</Link>
      </div>
    </div>
  )
}