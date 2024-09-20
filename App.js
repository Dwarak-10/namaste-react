import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = <h1>Namaste React from JSX🚀</h1>;

const Title = () => <h1>Namaste react inside Title</h1>;
console.log(<Title />);

const num = 20000;
//React Functional component ==> A function that returns a JSX code, then it is a Functional Components
const HeadingComponent = () => (
  <div id="container">
    <h2>{100 + 200}</h2>
    <h1 className="heading">Namaste React Function Component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
