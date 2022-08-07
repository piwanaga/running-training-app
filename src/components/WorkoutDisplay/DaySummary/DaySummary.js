import { format } from "date-fns"

const DaySummary = ({ date, title }) => {
    date = format(new Date(date), "MM/dd/yyyy")
    return (
        <div>
            <p>{date}</p>
            <p>{title}</p>
        </div>
    )
}

export default DaySummary