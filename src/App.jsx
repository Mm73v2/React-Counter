import { useState } from "react";

const App = () => {
  const [counter, setCoutner] = useState(0);
  const increaseCounterHandler = () => {
    setCoutner((prev) => prev + 1);
  };

  const decreaseCounterHandler = () => {
    setCoutner((prev) => prev - 1);
  };

  const resetCounterHandler = () => {
    setCoutner(0);
  };
  return (
    <div className="container">
      <h2>State</h2>
      <p>
        In React, state is a built-in object that allows components to maintain
        and manage their own data. It is a fundamental concept in React and is
        used to control the rendering of UI elements based on the data.
      </p>
      <h2>What is state?</h2>
      <p>
        State is an object that represents the part of the component that can
        change over time. Each component can have its own state. State is used
        to store data that affects how the component renders and behaves.
      </p>

      <p>
        <strong>State is Local:</strong> State is specific to a component. If
        you want to share state between components, you might need to lift state
        up or use context/state management libraries.
      </p>
      <p>
        <strong>State Changes Trigger Re-render:</strong> When you update the
        state, React triggers a re-render of the component to reflect the new
        state.
      </p>
      <p>
        <strong>State is Asynchronous:</strong> State updates in React are
        batched and asynchronous. You might not see the updated state
        immediately after calling the updater function.
      </p>
      <h2>How to Use State</h2>
      <p>
        <strong>1- Initialize State:</strong> You initialize state in a React
        component using the useState hook (for functional components) or
        this.state (for class components).
      </p>
      <p>
        <strong>2- Update State:</strong> You update state using the setState
        function in class components or the updater function provided by
        useState in functional components. When the state changes, React
        re-renders the component to reflect the new state.
      </p>
      <p>
        <strong>3- Rendering with State:</strong> When the state changes, React
        automatically updates the component and re-renders it with the new state
        values.
      </p>
      <h2>
        The below example show how state updates the value of the counter:
      </h2>
      <p className="counter-text">{counter}</p>
      <div className="btn-container">
        <button onClick={increaseCounterHandler}>Increase by 1</button>
        <button onClick={decreaseCounterHandler}>Decrease by 1</button>
        <button onClick={resetCounterHandler}>Reset Counter</button>
      </div>
    </div>
  );
};

export default App;
