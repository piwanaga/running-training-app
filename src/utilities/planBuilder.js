import { calcStartDate, getWorkoutDates } from "./dateCalculations"
import { parseISO } from 'date-fns'

export const buildPlan = (plan, endDate) => {
    endDate = parseISO(endDate)
    const startDate = calcStartDate(plan.schedule.length, endDate)
    
    const schedule = setWorkoutDates(plan, startDate, endDate)
    
    return {...plan, startDate, endDate, schedule}
}

const setWorkoutDates = (plan, start, end) => {
    const schedule = []
    const dates = getWorkoutDates(start, end)

    for (let i = 0; i < plan.schedule.length; i ++) {
        let week = {weekNumber: i + 1, weekDistance: 0, workouts : []}
        let currWeek = plan.schedule[i].workouts

        for (let j = 0; j < currWeek.length; j ++) {
            week.weekDistance += currWeek[j].distance
            let currWorkout = {...currWeek[j], date: dates[i * 7 + j]}
            week.workouts.push(currWorkout)
        }
        
        schedule.push(week)
    }

    return schedule
}