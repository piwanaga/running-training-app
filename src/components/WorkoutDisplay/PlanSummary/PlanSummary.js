import { format } from "date-fns";

const PlanSummary = ({ description, startDate, endDate, totalDistance, source }) => {
    startDate = format(startDate, "MM/dd/yyyy")
    endDate = format(endDate, "MM/dd/yyyy")
  return (
    <div>
      <p>{description}</p>
      <p>Plan duration: {startDate} - {endDate}</p>
      <p>Total distance: {totalDistance}</p>
      <a href={source} target='_blank' rel='noreferrer'>Source</a>
    </div>
  );
};

export default PlanSummary;
