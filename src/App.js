import { useState, useEffect } from "react";
import { format } from "date-fns";
import "./App.css";
import InputArea from "./components/InputArea";
import WorkoutDisplay from "./components/WorkoutDisplay";
import { availablePlans } from "./utilities/plans";
import { buildPlan } from "./utilities/planBuilder";

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [builtPlan, setBuiltPlan] = useState(null)

  const handleDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handlePlanChange = async (planUrl) => {
    const res = await fetch(planUrl);
    const result = await res.json();
    setSelectedPlan(result);
  };

  useEffect(() => {
    if (selectedPlan) {
      const plan = buildPlan(selectedPlan, endDate);
      setBuiltPlan(plan)
    }
  }, [selectedPlan, endDate]);

  return (
    <div className="App">
      <InputArea
        availablePlans={availablePlans}
        handlePlanChange={handlePlanChange}
        handleDateChange={handleDateChange}
        endDate={endDate}
      />
      <WorkoutDisplay builtPlan={builtPlan} />
    </div>
  );
};

export default App;
