import React, { useState, useEffect } from "react";
import CreateGuessTable from "../CreateGuessTable/CreateGuessTable";

export default function Game() {
  //declare constants for the app
  const minimum = 1;
  const maximum = 10;
  const numberOfAttemptsAllowed = 3;

  //state declaration
  const [randomNumber, setrandomNumber] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [guess, setGuess] = useState([]);

  //only trigger reload when randomNumber changes
  useEffect(
    () => {
      setrandomNumber(randomNumberGenerator(minimum, maximum));
    },
    [randomNumber]
  );

  // ========================= utility functions start ========================= //

  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateTemparature() {
    let differenceInNumbers = Math.abs(randomNumber - inputNumber);
    switch (differenceInNumbers) {
      case 1:
        return "hot";
      case 2:
        return "warm";
      default:
        return "cold";
    }
  }

  function restartGame() {
    setrandomNumber("");
    setGuess([]);
    setInputNumber("");
  }

  /**
   * what function does
   * @param {*} message 
   */
  function closeWindowOrRestart(message) {
    if (window.confirm(message)) {
      window.close();
    } else {
      restartGame();
    }
  }

  /**
   * 
   */
  function addToGuessArray() {
    let obj = {};
    setInputNumber("");
    obj.numberOfGuess = guess.length > 0 ? guess.length + 1 : 1;
    obj.guessedNumber = inputNumber;
    obj.temperature = generateTemparature();
    setGuess(guess.concat(obj));
  }

  // ========================= utility functions end ========================= //

  function handleChange(event) {
    if (event.target.value >= maximum) {
      alert(`Invalid number. Please enter number less than ${maximum}`);
    } else {
      setInputNumber(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (+inputNumber === +randomNumber) {
      closeWindowOrRestart(
        `Right! You have guessed the right number. Close the window?`
      );
    } else {
      if (guess.length < numberOfAttemptsAllowed - 1) {
        addToGuessArray();
      } else {
        closeWindowOrRestart(
          `You have wrongly guessed ${numberOfAttemptsAllowed} times. Close the window?`
        );
      }
    }
  }

  return (
    <React.Fragment>
      <div>
        I am thinking of a number from {minimum} to {maximum}
      </div>
      <div>You must guess the number in {numberOfAttemptsAllowed} attempts</div>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Guess The Number
          <input
            type="number"
            placeholder="Enter a number"
            value={inputNumber}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Guess It!" />
      </form>
      {guess.length > 0 && <CreateGuessTable guesses={guess} />}
    </React.Fragment>
  );
}
