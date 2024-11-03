import React from "react";

const ErrorAlert = (props) => {
  return (
    <div id="errorMessage" class="alert alert-danger" role="alert">
      {props.msg}
    </div>
  );
};

export default ErrorAlert;
