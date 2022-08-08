import { format } from "date-fns"
import styles from './DaySummary.module.css'

const DaySummary = ({ date, title }) => {
    date = format(date, "MM/dd/yyyy")
    return (
        <div className={styles.summary}>
            <p className={styles.date}>{date}</p>
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default DaySummary