import React, { useState } from "react";
import "./App.css";
import HooksComponent from "./components/hook/HooksComponent";

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
    <main className="bg-primary flex flex-col gap-12 p-48">
      <div className="w-full">
        {TEST_STATE.map((e, i) => (
          <button
            className="btn-project"
            onClick={() => setTitleFocus(i)}
            key={`table_title_${i}`}
          >
            {e}
          </button>
        ))}
      </div>
      <div>{FocusComponent(titleFocus)}</div>
    </main>
  );
}

export default App;
