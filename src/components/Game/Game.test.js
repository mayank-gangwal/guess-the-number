import React from "react";
import { shallow, mount } from "enzyme";
import Game from "./Game";
import { create } from "react-test-renderer";

describe("Testing Game Component", () => {
  const wrapper = shallow(<Game />);

  it("renders without crashing", () => {
    shallow(<Game />);
  });

  it("should show descriptive texts", () => {
    const description1 = wrapper.find("div").first();
    const description2 = wrapper.find("div").at(1);
    const label = wrapper.find("label");
    expect(description1.text()).toBe("I am thinking of a number from 1 to 10");
    expect(description2.text()).toBe("You must guess the number in 3 attempts");
    expect(label.text()).toBe("Guess The Number");
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have expected two fields", () => {
    expect(wrapper.find('input[type="number"]').length).toEqual(1);
    expect(wrapper.find('input[type="submit"]').length).toEqual(1);
  });

  //   it("should have proper props for input field", () => {
  //     expect(wrapper.find('input[type="number"]').props()).toEqual({
  //       value: "",
  //       onChange: expect.any(Function),
  //       placeholder: "Enter a number",
  //       type: "number"
  //     });
  //   });

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
    // console.log(
    //   "wrapper =-----" + wrapper.find('input[type="number"]').debug()
    // );
    expect(wrapper.find('input[type="number"]').props().value).toBe(1);
  });
});

describe("unit testing of private functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  //const wrapper = mount(<Game />);
  const component = create(<Game />);
  const instance = component.root;

  instance.randomNumberGenerator = jest.fn((min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  });

  it("should generate a random number", () => {
    expect(instance.randomNumberGenerator(1, 10)).toBeTruthy();
    expect(instance.randomNumberGenerator).toHaveBeenCalled();
  });

  //   it("should set a random number", () => {
  //     instance.randomNumberGenerator(1, 10);
  //     //console.log(instance);
  //     expect(instance.randomNumber).toBeTruthy();
  //   });

  it("should retun a temperature", () => { });
});

// import React from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";
// import Game from "./Game";

// let container;

// beforeEach(() => {
//   var container = document.createElement("p"); // is a node
//   container.innerHTML = "test satu dua tiga";
//   document.body.appendChild(container);
//   //   container = document.getElementById("Game");
//   //   document.body.appendChild(container);
// });

// afterEach(() => {
//   //document.body.removeChild(container);
//   //container = null;
// });

// it("can render and update a table", () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.render(<Game />, container);
//   });

//   // Test second render and componentDidUpdate
//   //act(() => {});
// });

//with initial prop
//   it("should work fine with user entered number", () => {
//     const initialProp = { value: 9 };
//     const wrapperWithProp = shallow(<Game {...initialProp} />);
//     expect(wrapperWithProp
//         .find('input[type="number"]')
//         .props()).toEqual({
//       value: 9,
//       onChange: expect.any(Function),
//       placeholder: "Enter a number",
//       type: "number"
//     });
//   });
