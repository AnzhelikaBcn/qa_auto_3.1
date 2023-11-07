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

