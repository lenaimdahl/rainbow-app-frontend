import { Link } from "react-router-dom";

function Navigationbar() {
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
      </nav>
    </header>
  );
}

export default Navigationbar;
