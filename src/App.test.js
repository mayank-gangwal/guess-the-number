import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

describe("Testing App Component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("should show text", () => {
    const wrapper = shallow(<App />);
    const heading = wrapper.find("div header h1");
    expect(heading.text()).toBe("Let's begin");
  });
});
