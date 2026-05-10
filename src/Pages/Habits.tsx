import { HabitButtons } from "../assets/HabitButtons";
import { useRef, useState } from "react";
import { DateButtons } from "./Habits Assets/DateButtons";

export function Habits() {
    type habit = {
        id: number;
        name: string;
    }
    const [habits, setHabit] = useState<habit[]>(JSON.parse(localStorage.getItem("user-habits")?? "null") ?? [])
    const habitRef = useRef<HTMLInputElement>(null)

    return(
        //Add a habit, like "Practice react, and be able to tick boxes for the entire week.
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-center text-4xl text-zinc-50 font-bold my-5">Your Daily Habits</h1>
            <div id = "add-habit" className="flex my-5 gap-3 items-center">
                <input ref = {habitRef} placeholder= "Input habit here.." className=" p-2 outline-none bg-zinc-700 w-96 h-10 rounded-lg text-zinc-50 focus-visible:ring-2 focus-visible:ring-violet-600"></input>
                <HabitButtons addHabit={addHabit}>Add Habit</HabitButtons>
             </div>
            {habits.length === 0 && <h1 className="text-zinc-50 font-semibold text-center">You have no habits currently. Add one to get started!</h1>}
                {habits.map((habit) => (
                    <div className="flex flex-col bg-zinc-700 rounded-lg w-3xl justify-center text-zinc-50 p-2 gap-2 ">
                        <div id = "header" className="flex justify-between items-center ">
                            {habit.name}
                            <HabitButtons delHabit={() => deleteHabit(habit.id)}>Delete</HabitButtons>
                        </div>

                        <div className="flex flex-col gap-2 p-2 bg-zinc-800 rounded-md ">
                            <div id = "top" className="flex justify-between">
                                <h3 className="text-amber-600">Streak🔥: 5 </h3>
                                <h3>Date: May 10, 2026</h3>
                            </div>
                            <DateButtons/>
                        </div>

                        <div>


                        </div>

                    </div>
                ))}
        </div>
    )

    function addHabit() {
        let userHabit = habitRef.current!.value
        let newHabit = {id: Date.now(), name: userHabit }
        const updatedHabits = [...habits, newHabit]
        setHabit(updatedHabits)
        localStorage.setItem("user-habits", JSON.stringify(updatedHabits))
    }

    function deleteHabit(id: number){
        setHabit(habits.filter(removehabit => removehabit.id !== id))
    }
}


