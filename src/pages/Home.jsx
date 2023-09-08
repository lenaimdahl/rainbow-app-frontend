import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import AddActivity from "../component/AddActivity";
import Tracker from "../component/Tracker";
import Navigationbar from "../component/Navigationbar";

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
    <>
      <Navigationbar />
      <div className="flex-row">
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
        {selectedActivity && <Tracker selectedActivity={selectedActivity} />}
      </div>
    </>
  );
}

export default Home;
