import { createContext, useState } from "react";
import { BackendAPI } from "../api/BackendAPIHandler";

const GlobalContext = createContext();

const GlobalContextWrapper = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const backendAPIInstance = new BackendAPI();

  const fetchActivities = async () => {
    const { users } = await backendAPIInstance.getNonFriends();
    setActivities(users);
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
