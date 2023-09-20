function ActivityList({ activities, onActivityClick }) {
  return (
    <>
      <h3>All Activities</h3>
      <div className="flex-wrap">
        {activities.map((activity, index) => (
          <div className="card">
            <div key={index} onClick={() => onActivityClick(activity)}>
              <div
                style={{
                  color: "red",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {activity.points} 🏆
              </div>
              <div
                style={{
                  paddingTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {" "}
                {activity.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ActivityList;
