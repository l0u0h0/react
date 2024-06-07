import React, { useState } from "react";
import "./App.css";
import HooksComponent from "./components/HooksComponent";

const TEST_STATE = ["hooks"];

function FocusComponent(idx: number) {
  switch (idx) {
    case 0:
      return <HooksComponent />;
    default:
      return null;
  }
}

function App() {
  const [titleFocus, setTitleFocus] = useState(0);

  return (
    <div className="App">
      <div>
        {TEST_STATE.map((e, i) => (
          <button onClick={() => setTitleFocus(i)} key={`table_title_${i}`}>
            {e}
          </button>
        ))}
      </div>
      <div>{FocusComponent(titleFocus)}</div>
    </div>
  );
}

export default App;
