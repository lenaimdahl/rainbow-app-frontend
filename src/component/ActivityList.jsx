function ActivityList({ fetchActivities, activities }) {
  return (
    <div className="vertical-list">
      <h3>Activities</h3>
      {activities.map((activity, index) => (
        <table key={index}>
          <tr>
            <td
              style={{
                backgroundColor: activity.color,
                width: 15,
                height: 15,
              }}
            ></td>
            <td>{activity.type}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}

export default ActivityList;
