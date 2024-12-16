import React from "react";

const Alert = (props) => {
  return (
    <>
      <div className={`alert alert-${props.type}`} role="alert">
        A simple primary alert—check it out!
      </div>
    </>
  );
};

export default Alert;
