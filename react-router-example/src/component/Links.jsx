import { Link } from "react-router-dom";

export default function Links() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Profile">Profile</Link>
      </li>
      <li>
        <Link to="/Profile/2">Profile/2</Link>
      </li>
      <li>
        <Link to="/About">Abvout</Link>
      </li>
      <li>
        <Link to="/About?name=uhan">About?name=uihan</Link>
      </li>
    </ul>
  );
}
