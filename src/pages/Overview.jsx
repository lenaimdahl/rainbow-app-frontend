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

  return (
    <div>
      <Navigationbar />
      <AddActivity fetchActivities={fetchActivities} activities={activities} />
      <ActivityList fetchActivities={fetchActivities} activities={activities} />
    </div>
  );
}

export default Overview;
