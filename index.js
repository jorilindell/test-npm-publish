/**
 * A simple utility package for demonstration
 */

/**
 * Greets a person with a friendly message
 * @param {string} name - The name of the person to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hello, ${name}! Welcome to our simple npm package.`;
}

/**
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

/**
 * Gets the current timestamp
 * @returns {string} Current date and time as ISO string
 */
function getCurrentTime() {
  return new Date().toISOString();
}

// Export the functions
module.exports = {
  greet,
  add,
  getCurrentTime
};

// If running directly, demonstrate the functions
if (require.main === module) {
  console.log(greet());
  console.log(greet('Developer'));
  console.log('2 + 3 =', add(2, 3));
  console.log('Current time:', getCurrentTime());
}