import {Notebook, Calendar, RefreshCcw} from 'lucide-react';
import { Link } from 'react-router-dom';
export function Panels(){
  return(
    <div className="flex flex-col gap-3 p-3">
      <div>
        <Link to ="/Calendar" className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer hover:p-2"><Notebook/>Plans</Link>
      </div>

      <div>
        <Link to ="/Calendar" className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer hover:p-2"><Calendar/>Calendar</Link>
      </div>

      <div >
        <Link to ="/Habits" className="flex gap-3 transition-all hover:bg-gray-200 hover:scale-110 rounded-md hover:cursor-pointer hover:p-2"><RefreshCcw/>Habits</Link>
      </div>
      
    </div>
  )
}