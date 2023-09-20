import { useState, useContext } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import Navigationbar from "../component/Navigationbar";

function Overview() {
  const { fetchActivities, activities } = useContext(GlobalContext);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div>
      <Navigationbar />
      {selectedActivity && (
        <ActivityList
          onActivityClick={handleActivityClick}
          fetchActivities={fetchActivities}
          activities={activities}
        />
      )}
    </div>
  );
}

export default Overview;
