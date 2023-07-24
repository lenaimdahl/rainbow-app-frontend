function ActivityList() {
  return (
    <div className="activity-list">
      <h3>Activities</h3>
      <ul>
        <li
          style={{
            backgroundColor: "pink",
          }}
        >
          Work
        </li>
        <li
          style={{
            backgroundColor: "yellow",
          }}
        >
          Kids
        </li>
        <li
          style={{
            backgroundColor: "green",
          }}
        >
          Household
        </li>
        <li
          style={{
            backgroundColor: "blue",
          }}
        >
          Sleep
        </li>
        <li
          style={{
            backgroundColor: "red",
          }}
        >
          Eat
        </li>
        <li
          style={{
            backgroundColor: "orange",
          }}
        >
          Workout
        </li>
      </ul>
    </div>
  );
}

export default ActivityList;
