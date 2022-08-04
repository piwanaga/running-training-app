import { useState } from 'react'
import './App.css';
import DateControl from './components/DateControl';
import PlanSelect from './components/PlanSelect';
import WorkoutDisplay from './components/WorkoutDisplay';

import { availablePlans } from './ch/plans';

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const handlePlanChange = async (planUrl) => {
    const res = await fetch(planUrl)
    const result = await res.json()
    setSelectedPlan({...result, weekCount: result.schedule.length})
  }

  return (
    <div className="App">
      <PlanSelect availablePlans={availablePlans} handlePlanChange={handlePlanChange}/>
      ending on
      <DateControl />
      <WorkoutDisplay selectedPlan={selectedPlan}/>
    </div>
  );
}

export default App;
