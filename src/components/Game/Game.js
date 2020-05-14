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

  /**
   * Only trigger reload when randomNumber changes/ initial rendering
   * Sets {randomNumber} state
   */
  useEffect(
    () => {
      setrandomNumber(randomNumberGenerator(minimum, maximum));
    },
    [randomNumber]
  );

  // ========================= utility functions start ========================= //

  /**
   * Gemerates a random number between @param(min) and @param(max)
   */
  function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  /**
   * Generates a temparature to give a hint to, how close the user is to 
   * randomly generated number. 
   */
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

  /**
   * Restarts the Game, setting all the states to initial values
   */
  function restartGame() {
    setrandomNumber("");
    setGuess([]);
    setInputNumber("");
  }

  /**
   * Alerts user and giving option either to exit game or restart.
   * Displays @param(message) in alert box.
   * OK - close the game window, exit!
   * CANCEL - restart the game
   */
  function closeWindowOrRestart(message) {
    if (window.confirm(message)) {
      window.close();
    } else {
      restartGame();
    }
  }

  /**
   * Creating an object of array, which would then be passed as a prop
   * to CreateGuessTable, which would generate a table based on this input prop
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

  // ========================= event handling functions start ========================= //

  /**
   * Instantly prompts user if the number is greater than {maximum}
   */
  function handleChange(event) {
    if (event.target.value >= maximum) {
      alert(`Invalid number. Please enter number less than ${maximum}`);
    } else {
      setInputNumber(event.target.value);
    }
  }

  /**
   * Alerts if user guessed the right number.
   * Alerts if user guessed the wrong number {numberOfAttemptsAllowed} times
   * Adds to {Guess} state array if the user guessed wrong number less than {numberOfAttemptsAllowed} times
   */
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

  // ========================= event handling functions end ========================= //

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
