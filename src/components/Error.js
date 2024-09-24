import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Something went wrong</h3>
      <h2>{err.data}</h2>
    </div>
  );
};

export default Error;
