import { useContext } from "react";
import { GlobalContext } from "../context/global.context";

function ActivityList({ activities }) {
  const { backendAPIInstance } = useContext(GlobalContext);

  const handleFinishedActivity = async (id, event) => {
    event.preventDefault();
    try {
      await backendAPIInstance.saveFinishedActivity(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h3>All Activities</h3>
      <div className="flex-wrap">
        {activities.map((activity) => (
          <div className="card">
            <div>
              <div
                className="box"
                onClick={(event) => handleFinishedActivity(activity._id, event)}
              ></div>
              <div key={activity._id}>
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
