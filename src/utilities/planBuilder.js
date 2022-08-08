import { calcStartDate, getWorkoutDates } from "./dateCalculations"
import { parseISO } from 'date-fns'

export const buildPlan = (plan, endDate) => {
    endDate = parseISO(endDate)
    const startDate = calcStartDate(plan.schedule.length, endDate)
    
    const schedule = setSchedule(plan, startDate, endDate)

    const totalDistance = calcTotalDistance(schedule)
    
    return {...plan, startDate, endDate, totalDistance, schedule}
}

const setSchedule = (plan, start, end) => {
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

const calcTotalDistance = (schedule) => {
    const distance = schedule.reduce((sum, week) => {
        return sum + week.weekDistance
    }, 0)

    return distance.toFixed(1)
}
