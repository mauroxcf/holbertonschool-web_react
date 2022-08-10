import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
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
            {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}
            {listNotifications.map((item) => (
              <NotificationItem
                key={item.id}
                type={item.type}
                value={item.value}
                html={item.html}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
