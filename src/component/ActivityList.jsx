function ActivityList({ fetchActivities, activities, onActivityClick }) {
  return (
    <div className="vertical-list">
      <h3>Activities</h3>
      {activities.map((activity, index) => (
        <table key={index}>
          <tbody>
            <tr>
              <td
                onClick={() => onActivityClick(activity)}
                style={{
                  backgroundColor: activity.color,
                  width: 15,
                  height: 15,
                  cursor: "pointer",
                }}
              ></td>
              <td>{activity.type}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default ActivityList;
