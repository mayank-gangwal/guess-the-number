// import React from "react";
// import ReactDOM from "react-dom";
// import { act } from "react-dom/test-utils";
// import CreateGuessTable from "./CreateGuessTable";

// let container;

// beforeEach(() => {
//   container = document.getElementById("CreateGuessTable");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   //document.body.removeChild(container);
//   //container = null;
// });

// it("can render and update a table", () => {
//   // Test first render and componentDidMount
//   act(() => {
//     ReactDOM.render(<CreateGuessTable />, container);
//   });

//   // Test second render and componentDidUpdate
//   //act(() => {});
// });

describe("Examining the syntax of Jest tests", () => {
  it("sums numbers", () => {
    expect(1 + 2).toEqual(3);
    expect(2 + 2).toEqual(4);
  });
});
