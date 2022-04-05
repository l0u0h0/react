import React from "react";

export default React.forwardRef(function Myinput(props, ref) {
  return (
    <div>
      <p>Input</p>
      <input ref={ref} />
    </div>
  );
});
