import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/global.context";
import AddActivity from "../component/AddActivity";

function Navigationbar() {
  const { fetchActivities, activities } = useContext(GlobalContext);

  useEffect(() => {
    fetchActivities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header>
      <nav>
        <Link className="nav-link" to={"/"}>
          Overview
        </Link>
        <Link className="nav-link" to={"/statistics"}>
          Statistics
        </Link>
        <Link className="nav-link" to={"/history"}>
          History
        </Link>
        <AddActivity
          fetchActivities={fetchActivities}
          activities={activities}
        />
      </nav>
    </header>
  );
}

export default Navigationbar;
