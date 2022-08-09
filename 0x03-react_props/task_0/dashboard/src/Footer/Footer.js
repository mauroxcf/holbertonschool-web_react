import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils";
const Footer = () => {
  return (
    <footer className="App-footer">
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </footer>
  );
};

export default Footer;
