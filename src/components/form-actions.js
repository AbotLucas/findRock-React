import React from "react";

function Actions(props) {
  return (
    <React.Fragment>
      <div className="actions">
        <button className="btng" type="submit">
          Search Similar Artist
        </button>
        <button className="btng" onClick={props.onClick}>
          By Abot Lucas
        </button>
      </div>
    </React.Fragment>
  );
}

export default Actions;
