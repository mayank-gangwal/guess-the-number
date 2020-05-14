import React from "react";
import { shallow, mount } from "enzyme";
import Game from "./Game";
import { create } from "react-test-renderer";

describe("Testing Game Component", () => {
  const wrapper = shallow(<Game />);

  it("renders without crashing", () => {
    shallow(<Game />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show descriptive texts", () => {
    const description1 = wrapper.find("div").first();
    const description2 = wrapper.find("div").at(1);
    const label = wrapper.find("label");
    expect(description1.text()).toBe("I am thinking of a number from 1 to 10");
    expect(description2.text()).toBe("You must guess the number in 3 attempts");
    expect(label.text()).toBe("Guess The Number");
  });

  it("should have expected two fields", () => {
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
    expect(wrapper.find('input[type="submit"]').length).toEqual(1);
  });

  it("should have proper props for input field", () => {
    expect(wrapper.find('input[type="number"]').props()).toEqual({
      value: "",
      onChange: expect.any(Function),
      placeholder: "Enter a number",
      type: "number"
    });
  });

  it("should have proper props for submit button", () => {
    expect(wrapper.find('input[type="submit"]').props()).toEqual({
      value: "Guess It!",
      type: "submit"
    });
  });

  it("should set the input data value on change", () => {
    wrapper.find('input[type="number"]').simulate("change", {
      target: {
        value: 1
      }
    });
    wrapper.update();
    // console.log(wrapper.find('div').debug());
    expect(wrapper.find('input[type="number"]').props().value).toBe(1);
  });
});

describe("unit testing of private functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const component = create(<Game />);
  const instance = component.root;

  instance.randomNumberGenerator = jest.fn((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  });

  it("should generate a random number", () => {
    expect(instance.randomNumberGenerator(1, 10)).toBeTruthy();
    expect(instance.randomNumberGenerator).toHaveBeenCalled();
  });
});