import React from "react";

export default function CreateGuessTable(props) {
  return (
    <div id="CreateGuessTable">
      <hr />
      {props.guesses.map(row => (
        <div key={row.numberOfGuess}>
          Guess #{row.numberOfGuess}. You guessed number {row.guessedNumber} - {" "}
          {row.temperature}
        </div>
      ))}
    </div>
  );
}
