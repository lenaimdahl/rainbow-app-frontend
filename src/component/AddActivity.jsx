import { useEffect, useContext, useState } from "react";
import { GlobalContext } from "../context/global.context";

function AddActivity({ fetchActivities, activities }) {
  const { backendAPIInstance } = useContext(GlobalContext);
  const [isClicked, setIsClicked] = useState(false);
  const [name, setName] = useState("");
  const [points, setPoints] = useState();

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddActivity = async (event) => {
    event.preventDefault();

    try {
      const newActivity = {
        name,
        points,
      };
      await backendAPIInstance.saveActivity(newActivity);
      await fetchActivities();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {!isClicked && (
        <button
          className="button-open"
          type="submit"
          onClick={() => setIsClicked(!isClicked)}
        >
          +
        </button>
      )}
      {isClicked && (
        <form className="flex-column-left" onSubmit={handleAddActivity}>
          <div className="margin">
            <button
              className="button-close"
              type="submit"
              onClick={() => setIsClicked(!isClicked)}
            >
              x
            </button>
            <label>Name: </label>
            <input
              type="string"
              name="type"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="margin">
            <input
              type="number"
              name="type"
              value={points}
              onChange={(event) => setPoints(event.target.value)}
            />
          </div>
          <button className="margin" id="add-activity-button" type="submit">
            +
          </button>
        </form>
      )}
    </div>
  );
}

export default AddActivity;
