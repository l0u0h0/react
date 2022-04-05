import "./App.css";
import React from "react";
import Modal from "./Components/Modal";
import Myinput from "./Components/Myinput";

// const Person = React.memo(({ name, age }) => {
//   console.log("Person render");
//   return (
//     <div>
//       {name} / {age}
//     </div>
//   );
// });

// function App() {
//   const [state, setState] = React.useState({
//     text: "",
//     persons: [
//       { id: 1, name: "lee", age: 25 },
//       { id: 2, name: "jiwoo", age: 21 },
//     ],
//   });
//   const toPersonClick = React.useCallback(() => {}, []);

//   const { text, persons } = state;
//   return (
//     <div>
//       <input type="text" value={text} onChange={change} />
//       <ul>
//         {persons.map((person) => {
//           return <Person {...person} key={person.id} onClick={toPersonClick} />;
//         })}
//       </ul>
//     </div>
//   );

//   function change(e) {
//     setState({
//       ...state,
//       text: e.target.value,
//     });
//   }
// }

// function App() {
//   const [visible, setVisibal] = React.useState(false);
//   const open = () => {
//     setVisibal(true);
//   };
//   const close = () => {
//     setVisibal(false);
//   };
//   return (
//     <div>
//       <button onClick={open}>open</button>
//       {visible && (
//         <Modal>
//           <div
//             style={{
//               width: "100vw",
//               height: "100vh",
//               background: "rgba(0, 0, 0, 0.5)",
//             }}
//             onClick={close}
//           >
//             Hello
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

function App() {
  const myInputRef = React.useRef();
  const click = () => {
    console.log(myInputRef.current.value);
  };
  return (
    <div>
      <Myinput ref={myInputRef} />
      <button onClick={click}>send</button>
    </div>
  );
}

export default App;
