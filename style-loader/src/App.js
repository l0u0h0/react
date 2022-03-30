import logo from "./logo.svg";
// import "./App.css";
import "./App.scss";
import styles from "./App.module.css";
import Button from "./component/button";
console.log(styles);

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>button</Button>
      </header>
    </div>
  );
}

export default App;
