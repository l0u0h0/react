import { NavLink, useLocation } from "react-router-dom";

const style = ({ isActive }) => ({
  color: isActive ? "green" : "blue",
});
// const { location } = useLocation();
// const obj = new URLSearchParams(location);

export default function NavLinks() {
  const { search } = useLocation();
  const obj = new URLSearchParams(search);
  return (
    <ul>
      <li>
        <NavLink to="/" style={style}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/Profile/" style={style}>
          Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/Profile/2" style={style}>
          Profile/2
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          style={style}
          // isActive={() => {
          //   console.log(search);
          //   return search === " ";
          // }}
        >
          Abvout
        </NavLink>
      </li>
      <li>
        <NavLink to="/About?name=uhan" style={style}>
          About?name=uihan
        </NavLink>
      </li>
    </ul>
  );
}
