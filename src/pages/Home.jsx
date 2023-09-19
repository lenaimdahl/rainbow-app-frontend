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
      <AddActivity fetchActivities={fetchActivities} activities={activities} />

      {selectedActivity && <Tracker selectedActivity={selectedActivity} />}
      <ActivityList
        onActivityClick={handleActivityClick}
        fetchActivities={fetchActivities}
        activities={activities}
      />
    </>
  );
}

export default Home;
