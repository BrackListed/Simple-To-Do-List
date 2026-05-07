import myImage from "../images/esquie.jpeg"

export function Header(){
      return <div className= "h-20 w-full flex gap-4 items-center">
      <img src = {myImage} alt =  "Icon" className="h-full w-20 rounded-full border-2"></img>
      <h1 className="font-bold text-2xl">Simple To-Do List</h1>
    </div>
}