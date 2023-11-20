# Bonus Calculation with Handling Zero, Null, and Negative Values

In this code modification, we have updated the `calculateBonus` function to handle zero, null, and negative values gracefully.

## Code Changes

We modified the `calculateBonus` function to ensure that it correctly processes the input values, accounting for various scenarios. 

# Bonus Calculation with Handling Zero, Null, and Negative Values

Here's an explanation of the code:

- We use `(a || 0)` and `(b || 0)` to replace zero, null, and falsy values with 0 for `a` and `b`, ensuring non-negativity.
- The code then checks if both `validA` and `validB` are non-negative.
- Finally, the function calculates the bonus based on the sum of `validA` and `validB`, ensuring that the result is not negative.

## Testing

To test the bonus calculation with the updated code, you can follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system. If not, you can download and install them from the official Node.js website (https://nodejs.org/).

2. Install Jest, a JavaScript testing framework, by running the following command in your project's root directory (where your tests are located):

npm install --save-dev jest

3. Create a Jest configuration file (jest.config.js) in your project's root directory if you don't already have one. You can customize this file according to your needs.

Sample jest.config.js:

module.exports = {
  testEnvironment: 'node',
};

4. Run your tests by executing the following command in your terminal or command prompt in your project's root directory:

npx jest

Jest will automatically discover and run your test files. Make sure your test files are named with the ".test.js" or ".spec.js" extension, or configure Jest to recognize your test files in the jest.config.js file.

You should see the test results, and Jest will run the tests for the bonus calculation function, including the cases where values are zero, null, or negative. It will help you ensure that the code correctly handles these scenarios.

### It is necessary to connect the coverage and bring it to 100% coverage on branches and lines

1. **Install Dependencies:**

   Install `babel-plugin-istanbul`:

   npm install --save-dev babel-plugin-istanbul
  
   Ensure Jest is already installed in your project.


2. **Run Tests with Coverage Measurement:**

   You can run tests with coverage measurement using the command:

   npx jest --coverage

   This will execute your tests and generate a coverage report that you can view in the browser or save for further analysis.


   ### Understanding the Differences Between Function, Branch, and Line Coverage:

   - **Functions:** Measures how many functions in your code were executed during testing.

   - **Branches:** Tracks the execution of different branches in your conditional statements. It's important to cover both true and false conditions.

   - **Lines:** Displays how many lines of your code were executed during testing.

   The goal is to achieve 100% coverage for each of these criteria to ensure a high level of test coverage.
   

Make sure that after running tests and measuring coverage, your report includes all necessary metrics and achieves 100% coverage for both branches and lines.
