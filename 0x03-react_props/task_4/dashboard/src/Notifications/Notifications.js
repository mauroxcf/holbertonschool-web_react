import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils";
import PropTypes from "prop-types";

function Notifications({ displayDrawer }) {
  const styleButton = {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    padding: 0,
    borderWidth: 0,
  };
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            aria-label="Close"
            style={styleButton}
            onClick={() => console.log("Close button has been clicked")}
          >
            <img alt="close" src={closeIcon} width="32px" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
