import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Verify that the components render img", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("Verify that the components render h1", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
