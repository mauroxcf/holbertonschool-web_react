import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import Login from "./Login";

Enzyme.configure({ adapter: new Adapter() });

describe("Should test login Component", () => {
  let wrapper = shallow(<Login />);

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  test("verify it renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Verify that the components renders 2 input tags", () => {
    const input1 = wrapper.find("input").at(0).prop("type");
    const input2 = wrapper.find("input").at(1).prop("type");
    expect(input1).toEqual("email");
    expect(input2).toEqual("password");
  });

  test("Verify that the components renders 2 label tags", () => {
    const tag1 = wrapper.find("label").at(0).text().trim();
    const tag2 = wrapper.find("label").at(1).text().trim();
    expect(tag1).toBe("Email");
    expect(tag2).toBe("Password");
  });
});
