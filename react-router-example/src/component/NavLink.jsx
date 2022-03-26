import { NavLink, useLocation } from "react-router-dom";

// let { location } = useLocation();
// const obj = new URLSearchParams(location);

export default function NavLinks() {
  const search = useLocation();
  console.log(search);
  const obj = new URLSearchParams(search);
  console.log(obj);
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Profile/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Profile/2"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          Profile/2
        </NavLink>
      </li>
      <li>
        <NavLink to="/About/" style={({ isActive, search }) => ({})}>
          Abvout
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About?name=uhan/"
          style={({ isActive }) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          About?name=uihan
        </NavLink>
      </li>
    </ul>
  );
}
