import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import AddActivity from "../component/AddActivity";
import Tracker from "../component/Tracker";

function Home() {
  const { fetchActivities, activities } = useContext(GlobalContext);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <div className="vertical-container">
        <ActivityList
          fetchActivities={fetchActivities}
          activities={activities}
        />
        <AddActivity
          fetchActivities={fetchActivities}
          activities={activities}
        />
      </div>
      <Tracker />
    </div>
  );
}

export default Home;
