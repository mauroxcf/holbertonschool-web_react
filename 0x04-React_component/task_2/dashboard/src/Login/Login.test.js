import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";

describe("<Login />", () => {
  it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Verify that the components render 2 input", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("input")).toHaveLength(2);
  });
  it("Verify that the components render 2 label", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("label")).toHaveLength(2);
  });
});
