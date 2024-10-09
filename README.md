
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


## Quest 12 : Containerization

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

## Real-World Example:
Imagine a team working on an e-commerce platform built with the MERN stack. The development environment requires specific versions of Node.js, MongoDB, and a front-end build process. Each developer needs the same environment to avoid compatibility issues. Using Docker, the team can create a containerized version of the app that includes the exact versions of everything needed.

This container is shared with all developers, ensuring that everyone is working in the same environment, whether they are on Windows, macOS, or Linux. This reduces setup time and makes sure there are no version mismatch issues. Similarly, the same Docker setup can be used in production to quickly scale up during peak traffic, like a sale event, by running multiple containers of the app behind a load balancer.

## Quest 13 : Basic Git Commands
Answer : 
1. Basic Git Commands: To work with Git, here are the basic steps:

Clone a repository: 
```Bash
git clone <repository-URL>
```
This command sets up a copy of the main (default) branch on your local machine.

Checkout to a new feature branch:
```Bash
 git checkout -b <branch-name>
 ```
After making some changes:

Add files:
```Bash
 git add .
 ```
This stages all the changes you’ve made to be included in the next commit.

Commit changes:
```Bash
 git commit -m "commit message"
 ```
This saves the staged changes with a commit message.

Pull from the main branch or the working feature branch before pushing to ensure your branch is up to date: git pull origin main

Push to GitHub:
Push the code with:
```Bash
 git push origin <branch-name>.
 ```


## Quest 14 : Branching Strategy
Branching Strategy: We follow a feature branching strategy:

We have a main branch and a feature branch.
For any new task or feature, we create a new branch from the feature branch, like
```Bash 
git checkout -b new-feature-branch
```
After completing work, we pull the latest changes from the feature branch using 
```Bash
git pull origin feature-branch 
```
and merge them into our local branch to ensure we are up to date, and push the new branch back to the feature branch.
Before the sprint ends, we test the feature branch, and have it reviewed, and once approved, we merge it into the main branch.


## Quest 15 : Merging and Resolving Conflicts

Merging and Resolving Conflicts:
Resolving merge conflicts:

Switch to main branch: 
```Bash
git checkout main
```
Pull the latest changes: 
```Bash
git pull origin feature
```
Merge the feature branch: 
```Bash
git merge feature-branch
```
 or take pull from feature to main
If there is any conflict, Git will mark the conflicting files. Open those files, look for <<<< and >>>>, and manually choose which changes to keep.
After resolving conflicts, stage the resolved files:
```Bash
 git add <file-name> or git add .
 ```
Complete the merge: 
```Bash
git commit -m "Resolved merge conflicts"
```
Push to main: 
```Bash
git push origin main
```

## Quest 16 : CI/CD Integration

CI/CD Integration: To set up CI/CD with GitHub Actions for a Node.js app:

Create a .github/workflows/main.yml file in your repository.
Inside the file and define steps like:
Set up Node.js.
Install dependencies with npm install.
Run tests with npm test.
Deploy the application.

for example CI workflow:

yaml
```Bash
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14'
    - run: npm install
    - run: npm test
    - run: npm run deploy
```
Once the code is pushed to the main branch, this workflow will automatically run tests and deploy the latest code.


