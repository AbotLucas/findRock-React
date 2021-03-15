import React from "react";
import "./loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="spinnerContainer">
        <h4>Loading</h4>
        <div className="spinner"></div>
      </div>
    </React.Fragment>
  );
}

export default Loading;
