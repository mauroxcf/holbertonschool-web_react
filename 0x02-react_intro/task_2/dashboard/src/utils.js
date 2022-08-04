function getFullYear() {
  const currentYear = new Date().getFullYear();
  return currentYear;
}

function getFooterCopy(isIndex = false) {
  if (isIndex) return "Holberton School";
  else return "Holberton School main dashboard";
}

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFullYear, getFooterCopy, getLatestNotification };
