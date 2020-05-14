import React from "react";
import { shallow } from "enzyme";
import CreateGuessTable from "./CreateGuessTable";
import { create } from "react-test-renderer";

describe("Examining the syntax of Jest tests", () => {
  const initialProp = [{
    numberOfGuess: 1,
    guessedNumber: 5,
    temperature: 'hot'
  }];
  const wrapper = shallow(<CreateGuessTable guesses={initialProp} />)

  it("should render without crashing", () => {
    shallow(<CreateGuessTable guesses={initialProp} />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show table text as expected", () => {
    const description = wrapper.find("div").at(1);
    expect(description.text()).toBe("Guess #1. You guessed number 5 -  hot");
  });
});
