import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/global.context";

function AddActivity() {
  const { backendAPIInstance } = useContext(GlobalContext);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="add-activity">
      <h2>Add an Activity</h2>
      <form>
        <div>
          <label>activity type: </label>
          <input type="string" />
        </div>
        <div>
          <label>activity color: </label>
          <select id="color" name="color">
            {activities.map((user) => (
              <option>{}</option>
            ))}
          </select>
        </div>
        <button id="add-activity-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}

export default AddActivity;
