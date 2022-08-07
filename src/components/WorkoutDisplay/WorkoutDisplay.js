import WeekSummary from "./WeekSummary"
import DaySummary from "./DaySummary"

const WorkoutDisplay = ({ builtPlan }) => {
   
    return (
        <div>
            {builtPlan?.schedule.map((week) => (
                <div key={week.weekNumber}>
                <WeekSummary weekNumber={week.weekNumber} weekDistance={week.weekDistance}/>
                {week.workouts.map((w) => <DaySummary date={w.date} title={w.title} key={w.date}/>)}
                </div>
            ))}
        </div>
    )
}

export default WorkoutDisplay