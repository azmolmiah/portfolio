import React from "react";

const AppWrap = (Component, idName) =>
  function HOC() {
    return (
      <div id={idName}>
        <div className="app_wrapper app__container app__flex">
          <Component />
        </div>
      </div>
    );
  };

export default AppWrap;
