type DateButtonProp = {
    addStreak: (date: Date) => void

}

export function DateButtons({addStreak}: DateButtonProp){
    let dates = []
    for(let x = 0; x < 7; x++){
        let day = new Date()
        day.setDate(day.getDate() + x)
        dates.push(day)
    }



    return(
        <div className="flex gap-2 justify-evenly">
            {dates.map((date => (
                <div>
                    <button onClick = {() => addStreak(date)}className="bg-violet-600 p-2 rounded-lg h-12 items-center text-zinc-50 transition-all hover:cursor-pointer hover:scale-110 hover:bg-violet-500 ">{date.toLocaleDateString()}</button>
                </div>
         )))}
        </div>
    )
}