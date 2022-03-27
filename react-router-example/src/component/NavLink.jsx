import { NavLink, useLocation } from "react-router-dom";

export default function NavLinks() {
  const search = useLocation().search;
  const func1 = () => {
    if (search === "") {
      style = style2;
      return console.log("hihi");
    } else if (search === "?name=uhan") {
      style1 = style2;
      return console.log("name=uhan");
    } else {
      style = style1;
    }
  };
  let style = ({ isActive }) => ({
    color: isActive ? "blue" : "blue",
  });
  let style1 = ({ isActive }) => ({
    color: isActive ? "blue" : "blue",
  });
  const style2 = ({ isActive }) => ({
    color: isActive ? "green" : "blue",
  });
  func1();

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
        <NavLink to="About" style={style}>
          Abvout
        </NavLink>
      </li>
      <li>
        <NavLink to="About?name=uhan" style={style1}>
          About?name=uihan
        </NavLink>
      </li>
    </ul>
  );
}
