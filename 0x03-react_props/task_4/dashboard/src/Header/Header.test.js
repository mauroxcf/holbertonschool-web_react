import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import Header from "./Header";
import logo from "../logo.jpg";

Enzyme.configure({ adapter: new Adapter() });

describe("<Header />", () => {
  it("Render Header Component", () => {
    let wrapper = shallow(<Header />);
    expect(wrapper.find("Header").exists()).toEqual(false);
  });
  it("Verify component renders img", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").prop("src")).toEqual(logo);
  });
});
