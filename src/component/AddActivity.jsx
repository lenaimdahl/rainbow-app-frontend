import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/global.context";

function AddActivity({ fetchActivities, activities }) {
  const { backendAPIInstance } = useContext(GlobalContext);
  const [type, setType] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddActivity = async (event) => {
    event.preventDefault();

    try {
      const newActivity = {
        type,
        color,
      };
      await backendAPIInstance.saveActivity(newActivity);
      await fetchActivities();
    } catch (error) {
      console.error(error);
    }
  };

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
    <div>
      <form className="flex-column-left" onSubmit={handleAddActivity}>
        <h2>Add an Activity</h2>
        <div className="margin">
          <label>activity type: </label>
          <input
            type="string"
            name="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </div>
        <div className="margin">
          <label>activity color: </label>
          <select
            id="color"
            name="color"
            onChange={(event) => setColor(event.target.value)}
          >
            {colors.map((color) => (
              <option>{color}</option>
            ))}
          </select>
        </div>
        <button className="margin" id="add-activity-button" type="submit">
          +
        </button>
      </form>
    </div>
  );
}

export default AddActivity;
