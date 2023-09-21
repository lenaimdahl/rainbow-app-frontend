import { useContext, useState } from "react";
import { GlobalContext } from "../context/global.context";

function ActivityList({ activities }) {
  const { backendAPIInstance } = useContext(GlobalContext);
  const [clickedActivityId, setClickedActivityId] = useState(null);

  const handleFinishedActivity = async (id, event) => {
    event.preventDefault();
    if (clickedActivityId === id) {
      setClickedActivityId(null);
    } else {
      setClickedActivityId(id);
      try {
        await backendAPIInstance.saveFinishedActivity(id);
        setClickedActivityId(null);
      } catch (error) {
        console.error(error);
      }
    }
  };
  console.log(clickedActivityId);

  return (
    <>
      <h3>All Activities</h3>
      <div className="flex-wrap">
        {activities.map((activity) => (
          <div className="card" key={activity._id}>
            <div
              className={`box ${
                clickedActivityId === activity._id ? "green-box" : ""
              }`}
              onClick={(event) => handleFinishedActivity(activity._id, event)}
            ></div>
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
              {activity.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ActivityList;
