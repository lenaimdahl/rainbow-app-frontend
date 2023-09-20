function ActivityList({ activities }) {
  const handleActivityClick = (activity) => {};

  return (
    <>
      <h3>All Activities</h3>
      <div className="flex-wrap">
        {activities.map((activity, index) => (
          <div className="card">
            <div>
              <div className="box" onClick={() => handleActivityClick}></div>
              <div key={index}>
                <div
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  {activity.points} 🏆
                </div>
              </div>
              <div
                style={{
                  paddingTop: 10,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
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
