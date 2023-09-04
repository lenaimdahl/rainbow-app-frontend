import ActivityItem from "./ActivityItem";

function ActivityList({ fetchActivities, activities }) {
  return (
    <div className="vertical-list">
      <h3>Activities</h3>
      <ul>
        <ActivityItem color={"pink"} type={"Work"} />
        <ActivityItem color={"yellow"} type={"Kids"} />
        <ActivityItem color={"green"} type={"Household"} />
        <ActivityItem color={"blue"} type={"Sleep"} />
        <ActivityItem color={"red"} type={"Eat"} />
        <ActivityItem color={"orange"} type={"Workout"} />
      </ul>
    </div>
  );
}

export default ActivityList;
