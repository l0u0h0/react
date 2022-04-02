import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>button</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
