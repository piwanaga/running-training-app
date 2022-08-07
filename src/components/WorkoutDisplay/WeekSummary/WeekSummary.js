import styles from './WeekSummary.module.css'

const WeekSummary = ({ weekNumber, weekDistance }) => {
    return (
        <div className={styles.weekSummary}>
            <p className={styles.weekNumber}>Week {weekNumber}</p>
            <p className={styles.weekDistance}>{weekDistance}</p>
        </div>
    )
}

export default WeekSummary