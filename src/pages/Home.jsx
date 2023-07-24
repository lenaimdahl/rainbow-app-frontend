import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import AddActivity from "../component/AddActivity";

function Home() {
  const { fetchActivities, activities } = useContext(GlobalContext);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Welcome</h3>
      <div className="activity-container">
        <ActivityList
          fetchActivities={fetchActivities}
          activities={activities}
        />
        <AddActivity
          fetchActivities={fetchActivities}
          activities={activities}
        />
      </div>
    </div>
  );
}

export default Home;
