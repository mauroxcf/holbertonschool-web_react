import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";

export default class BodySectionWithMarginBottom extends Component {
  constructor(props) {
    super(props);
    this.props();
  }
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};
