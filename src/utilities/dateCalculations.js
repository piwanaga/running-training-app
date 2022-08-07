import { subDays, eachDayOfInterval } from 'date-fns'

export const calcStartDate = (numWeeks, endDate) => {
    const startDate = subDays(endDate, (numWeeks * 7) - 1);
    return startDate
}

export const getWorkoutDates = (start, end) => {
    const dates = eachDayOfInterval({
        start,
        end
      })
      return dates
}

