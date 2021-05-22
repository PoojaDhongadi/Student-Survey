import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <div>
      <div className="container">
        <h1>WELCOME</h1>
        <p>Enter your marks and see where you stand in leaderboard</p>
      </div>
      
      <button className="btn">
        <Link to="/marks" className="link">
          Enter Marks
        </Link>
      </button>
      <br />
      <br />
      <button className="btn">
        <Link to="/leaderboard" className="link">
          View Leaderboard
        </Link>
      </button>
    </div>
  );
}
