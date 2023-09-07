import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import AddActivity from "../component/AddActivity";
import Tracker from "../component/Tracker";

function Home() {
  const { fetchActivities, activities } = useContext(GlobalContext);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleActivityClick = (activity) => {
    setSelectedActivity(activity);
  };

  return (
    <div className="flex">
      <div className="vertical-container">
        <ActivityList
          onActivityClick={handleActivityClick}
          fetchActivities={fetchActivities}
          activities={activities}
        />
        <AddActivity
          fetchActivities={fetchActivities}
          activities={activities}
        />
      </div>
      <Tracker selectedActivity={selectedActivity} />
    </div>
  );
}

export default Home;
