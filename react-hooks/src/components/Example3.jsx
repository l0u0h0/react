import React from "react";

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>button</button>
    </div>
  );
  function click() {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}
