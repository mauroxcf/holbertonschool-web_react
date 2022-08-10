import React from "react";
import "./Notifications.css";
import closeIcon from "../close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const styleButton = {
      position: "absolute",
      top: 0,
      right: 0,
      cursor: "pointer",
      padding: 0,
      borderWidth: 0,
    };
    const { displayDrawer, listNotifications } = this.props;

    const closeButton = () => {
      console.log("Close button has been clicked");
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
              onClick={closeButton}
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
                  id={item.id}
                  type={item.type}
                  value={item.value}
                  html={item.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
