import React from "react";

const Alert = (props) => {
  return (
    <div id="successMessage" class="alert alert-primary" role="alert">
      {props.msg}
    </div>
  );
};

export default Alert;
