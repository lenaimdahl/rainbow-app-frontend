import ActivityList from "../component/ActivityList";
import AddActivity from "../component/AddActivity";

function home() {
  return (
    <div>
      <h3>Welcome</h3>
      <div className="activity-container">
        <ActivityList />
        <AddActivity />
      </div>
    </div>
  );
}

export default home;
