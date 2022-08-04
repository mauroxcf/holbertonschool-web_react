import React from "react";
import "./Notifications.css";
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const styleButton = {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    padding: 0,
    borderWidth: 0,
  };
  return (
    <div className="Notifications">
      <button
        aria-label="Close"
        style={styleButton}
        onClick={() => console.log("Close button has been clicked")}
      >
        <img alt="close" src={closeIcon} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li
          data="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
  );
}

export default Notifications;
