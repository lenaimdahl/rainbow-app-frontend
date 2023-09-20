import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import ActivityList from "../component/ActivityList";
import Navigationbar from "../component/Navigationbar";
import AddActivity from "../component/AddActivity";

function Overview() {
  const { fetchActivities, activities } = useContext(GlobalContext);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [selectedActivity, setSelectedActivity] = useState(null);

  // const handleActivityClick = (activity) => {
  //   setSelectedActivity(activity);
  // };

  return (
    <div>
      <Navigationbar />
      {/* {selectedActivity && ( */}
      <AddActivity fetchActivities={fetchActivities} activities={activities} />
      <ActivityList
        // onActivityClick={handleActivityClick}
        fetchActivities={fetchActivities}
        activities={activities}
      />
      {/* )} */}
    </div>
  );
}

export default Overview;
