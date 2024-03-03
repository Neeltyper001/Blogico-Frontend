import React from "react";
import "./index.css";

const Loading = () => {
  return (
    <div className="loader-parent">
      <div className="loader-container">
        <div className="loader-ring">
          <div className="loader-core"></div>
          <div className="loader-spinner"></div>
        </div>
        <span className="loading">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
