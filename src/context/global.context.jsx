import { createContext, useState } from "react";
import { BackendAPI } from "../api/BackendAPIHandler";

const GlobalContext = createContext();

const GlobalContextWrapper = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const backendAPIInstance = new BackendAPI();

  const fetchActivities = async () => {
    const { activities } = await backendAPIInstance.getActivities();
    setActivities(activities);
  };

  return (
    <GlobalContext.Provider
      value={{ backendAPIInstance, activities, setActivities, fetchActivities }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextWrapper };
