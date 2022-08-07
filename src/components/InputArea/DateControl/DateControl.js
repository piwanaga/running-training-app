const DateControl = ({ handleDateChange, endDate }) => {
  return (
    <div>
    <input
      type="date"
      value={endDate}
      onChange={(e) => handleDateChange(e)}
    />
    </div>
  );
};

export default DateControl;
