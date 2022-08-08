import styles from './WeekSummary.module.css'

const WeekSummary = ({ weekNumber, weekDistance }) => {
    return (
        <div className={styles.summary}>
            <h5 className={styles.number}>Week {weekNumber}</h5>
            <p className={styles.distance}>Distance: {weekDistance}</p>
        </div>
    )
}

export default WeekSummary