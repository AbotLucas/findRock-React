import React from "react";

function Error(props) {
  return (
    <React.Fragment>
      <div className="spinnerContainer">
        <h2>Error! {props.errorMensaje}</h2>
      </div>
    </React.Fragment>
  );
}

export default Error;
