import { useState } from "react";
import { format } from "date-fns";

const DateControl = () => {
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));
 
  const handleChange = (e) => {
    setEndDate(e.target.value)
  };

  return (
    <div>
    <input
      type="date"
      value={endDate}
      onChange={(e) => handleChange(e)}
    />
    </div>
  );
};

export default DateControl;
