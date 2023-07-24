import { useEffect } from "react";

function AddActivity({ fetchActivities, activities }) {
  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

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
            {colors.map((color) => (
              <option>{color}</option>
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
