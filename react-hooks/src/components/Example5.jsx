import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount", count);
    return () => {
      //clean up
      // componentWillUnmount
    };
  }, []);
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
    return () => {
      // clean up
      console.log("clean up by count", count);
    };
  }, [count]);

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
