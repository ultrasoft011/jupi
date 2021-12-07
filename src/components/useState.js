import React, { useState } from "react";

const TestHook = () => {
  const [state, setstate] = useState(0);

  return (
    <>
      <div>
        <p>You clicked {state}</p>
        <button onClick={() => setstate(state + 1)}>click me </button>
      </div>
    </>
  );
};

export default TestHook;
