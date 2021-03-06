import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Links from "./component/Links";
import NavLinks from "./component/NavLink";
import Login from "./pages/Login";
const isLogin = false;
function App() {
  const Redirect = () => {
    if (isLogin) {
      return <Navigate replce to="/" />;
    } else {
      return <Login />;
    }
  };
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/Login" element={Redirect()} />
        <Route path="/" element={<Home />} />
        <Route path="Profile/" element={<Profile />}>
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
