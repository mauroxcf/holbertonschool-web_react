import React from "react";

const NotificationItem = ({ type, html, value }) => {
  return (
    <>
      {html ? (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
      ) : (
        <li data-notification-type={type}>{value}</li>
      )}
    </>
  );
};

export default NotificationItem;
