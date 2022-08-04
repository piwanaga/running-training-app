import WeekSummary from "./WeekSummary"
import DaySummary from "./DaySummary"

const WorkoutDisplay = ({ selectedPlan }) => {
   
    return (
        <div>
            {selectedPlan?.schedule.map((s, idx) => (
                <div>
                <WeekSummary weekNumber={idx + 1} />
                {s.workouts.map((workout) => <DaySummary title={workout.title} />)}
                </div>
            ))}
        </div>
    )
}

export default WorkoutDisplay