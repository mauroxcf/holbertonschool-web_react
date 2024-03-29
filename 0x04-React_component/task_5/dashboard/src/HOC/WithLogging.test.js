import { mount } from "enzyme";
import React from "react";
import WithLogging from "./WithLogging";
import Login from "../Login/Login";

describe("<WithLogging />", () => {
  it("trigger console.log on mount and on unmount components", () => {
    console.log = jest.fn();

    const HOC = WithLogging(() => <p />);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(1, `Component is mounted`);
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2, `Component is unmount`);

    jest.restoreAllMocks();
  });
  it("trigger console.log mount and on unmount of the login component", () => {
    console.log = jest.fn();

    const HOC = WithLogging(Login);

    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);

    expect(console.log).toHaveBeenNthCalledWith(1, `Component is mounted`);
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2, `Component is unmount`);

    jest.restoreAllMocks();
  });
});
