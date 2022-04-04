import "./App.css";
import React from "react";

const Person = React.memo(({ name, age }) => {
  console.log("Person render");
  return (
    <div>
      {name} / {age}
    </div>
  );
});

function App() {
  const [state, setState] = React.useState({
    text: "",
    persons: [
      { id: 1, name: "lee", age: 25 },
      { id: 2, name: "jiwoo", age: 21 },
    ],
  });
  const toPersonClick = React.useCallback(() => {}, []);

  const { text, persons } = state;
  return (
    <div>
      <input type="text" value={text} onChange={change} />
      <ul>
        {persons.map((person) => {
          return <Person {...person} key={person.id} onClick={toPersonClick} />;
        })}
      </ul>
    </div>
  );

  function change(e) {
    setState({
      ...state,
      text: e.target.value,
    });
  }
}

export default App;
