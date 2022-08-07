const PlanSelect = ({ availablePlans, handlePlanChange }) => {
  const handleChange = (e) => {
    handlePlanChange(e.target.value);
  };
  return (
    <select name="planSelect" onChange={handleChange}>
      <option value="">Select a plan</option>
      {availablePlans.map((p) => (
        <option key={p.url} value={p.url}>{p.name}</option>
      ))}
    </select>
  );
};

export default PlanSelect;
