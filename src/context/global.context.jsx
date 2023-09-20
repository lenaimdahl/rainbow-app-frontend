import { createContext, useState } from "react";
import { BackendAPI } from "../api/BackendAPIHandler";

const GlobalContext = createContext();

const GlobalContextWrapper = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [points, setPoints] = useState([]);
  const backendAPIInstance = new BackendAPI();

  const fetchActivities = async () => {
    const { activities } = await backendAPIInstance.getActivities();
    setActivities(activities);
  };

  const fetchPoints = async () => {
    const { user } = await backendAPIInstance.getPoints();
    setPoints(user.points);
  };

  return (
    <GlobalContext.Provider
      value={{
        backendAPIInstance,
        activities,
        setActivities,
        fetchActivities,
        fetchPoints,
        points,
        setPoints,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextWrapper };
