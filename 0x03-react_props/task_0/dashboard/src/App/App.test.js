import { shallow } from "enzyme";
import App from "../App/App";

describe("<App />", () => {
  it("App renders without any errors", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
});
