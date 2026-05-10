import type { ReactNode } from "react"

type HabitButtonProp = {
    children: ReactNode
    addTask: () => void
}

export function HabitButtons({children, addTask}: HabitButtonProp) {
    return(
        <button onClick = {() => addTask()} className="bg-violet-600 p-2 rounded-lg text-zinc-50 transition-all hover:cursor-pointer hover:scale-110 hover:bg-violet-500 ">{children}</button>
    )


}

