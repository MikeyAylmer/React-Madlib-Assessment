# React-Madlib-Assessment
# Madlibs Game in JavaScript (madlib.js)

Welcome to the Madlibs Game repository! This is a simple web-based game that allows users to create fun and wacky stories by filling in the blanks with various words (nouns, adjectives, colors, etc.). The game logic is implemented in the `madlib.js` file.

## madlib.js Overview

The `madlib.js` file is the core JavaScript file responsible for the game's functionality. Here's an overview of its structure and functions:

### Functions

1. **`generateMadlib` Function:**

   - This function is called when the "Create Madlib" button is clicked.
   - It constructs a Madlib story by replacing placeholders in a predefined template with the words provided by the user in the form.

2. **`restartGame` Function:**

   - This function is called when the "Restart" button is clicked.
   - It resets the input fields and clears the generated Madlib.

### State Variables

- `noun1`, `noun2`, `adjective`, and `color` are state variables that store the user's input for different parts of speech.
- `madlib` is a state variable that stores the generated Madlib story.
- `isMadlibGenerated` is a state variable that keeps track of whether a Madlib has been created.

### HTML and React Components

The `MadlibsGame` component is created using React and defines the structure of the game page. It includes:

- Input fields for nouns, adjectives, and colors.
- "Create Madlib" button that triggers the `generateMadlib` function.
- Displaying the generated Madlib when it's available.
- "Restart" button to reset the game.

## Usage

To use this Madlibs Game, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/madlibs-game.git
