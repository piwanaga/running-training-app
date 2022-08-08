import DateControl from "./DateControl";
import PlanSelect from "./PlanSelect";
import styles from './InputArea.module.css'

const InputArea = ({ availablePlans, handlePlanChange, handleDateChange, endDate }) => {
  return (
    <div className={styles.inputArea}>
      <PlanSelect
        availablePlans={availablePlans}
        handlePlanChange={handlePlanChange}
      />
      <p className={styles.ending}>ending on</p>
      <DateControl handleDateChange={handleDateChange} endDate={endDate}/>
    </div>
  );
};

export default InputArea;
