
import { Left } from "./assets/Left";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Main } from "./assets/Main";
import { Habits } from "./Pages/Habits";

export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {
      <div className="flex gap-2-">
        <Left/>
        <Main/>
      </div>
      }></Route>

      <Route path = "/Habits" element = {
        <Habits/>
      }></Route>

    </Routes>

    </BrowserRouter>
  )
}






