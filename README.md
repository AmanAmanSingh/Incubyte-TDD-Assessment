
# Incubyte String Calculator

A simple String Calculator that can handle multiple numbers, custom delimiters, and various input formats.


## Features

- **Add Method**: Takes a string of numbers and returns their sum.
- **Support for Empty String**: Returns `0` for an empty string input.
- **Single Number Input**: Returns the number itself for a single number input.
- **Two Numbers**: Accepts two numbers separated by commas.
- **Multiple Numbers**: Handles an unknown amount of numbers, allowing both commas and new lines as separators.
- **Custom Delimiters**: Supports custom delimiters defined in the input.
- **Negative Numbers Handling**: Throws an error when negative numbers are included, listing all negatives.
- **Ignore Large Numbers**: Ignores numbers greater than `1000`.



## Run Locally


Clone the project

```bash
   git clone https://github.com/AmanAmanSingh/Incubyte-TDD-Assessment.git
```

Go to the project directory :

```bash
  cd Incubyte-TDD-Assessment
```

Install dependencies :

```bash
  npm install
```

Start the server :

```bash
    npm start
```

For run Test cases 
```bash
    npm test
```

## Tech Stack

**Server:** Node.js.


## Support

For support, email amans7097@gmail.com.


## EXAMPLE : 

```bash
const { add } = require('./src/calculator');

// Example usage:
console.log(add("1,2")); // Outputs: 3
console.log(add("1\n2,3")); // Outputs: 6
```

```bash
npm test
```
```Bash
Example Inputs
"" → Returns 0
"1" → Returns 1
"1,2" → Returns 3
"1\n2,3" → Returns 6
"//;\n1;2" → Returns 3
"//[***]\n1***2***3" → Returns 6
"1,-2,3" → Throws Error: Negative numbers not allowed: -2
```
