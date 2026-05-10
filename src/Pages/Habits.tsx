import { HabitButtons } from "../assets/HabitButtons";

export function Habits() {
    return(
        //Add a habit, like "Practice react, and be able to tick boxes for the entire week.
        <div className="flex flex-col items-center">
            <h1 className="text-center text-4xl text-zinc-50 font-bold my-5">Your Daily Habits</h1>
            <div id = "add-habit" className="flex my-5 gap-3 items-center">
                <input placeholder= "Input habit here.." className=" p-2 outline-none bg-zinc-700 w-96 h-10 rounded-lg text-zinc-50 focus-visible:ring-2 focus-visible:ring-violet-600"></input>
                <HabitButtons addTask={addTask}>Add Habit</HabitButtons>
            </div>
        </div>
    )

    function addTask() {
        console.log("Hallo world!")
    }
}


