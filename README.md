# What is this app for?
The program picks a random number, based on your desired range (for now, it is hardcoded from 1 to 10). The user gets few guesses to get it right (for now, it is hardcoded to 3 guesses). As soon as the user enters the correct number the program writes a winning message and ask the user either to exit or continue playing. If the user fails to enter the correct number in maximum attempts (here, 3) guesses, the program writes a failure message and asks the user either to exit or continue playing. 
The program also writes "cold" when the guess is 3 or more away from the correct answer, "warm" when the guess is 2 away, and "hot" when the guess is 1 away.

# Code how-to

There are certain variables used in the parent component, named `Game` component.

* You can assign the minimum number for gerenrating randoms, from **minimum**
* You can assign the maximum number for gerenrating randoms, to **maximum**
* You can assign maximum number of attempts allowed in **numberOfAttemptsAllowed**

## Available Scripts

In the project directory, you can run:
###  `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Tests the test cases for different component used in app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
