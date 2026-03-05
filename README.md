# Test NPM Publish - Simple Package

A simple utility package for testing npm publication process.

## Installation

```bash
npm install test-npm-publish-simple
```

## Usage

```javascript
const { greet, add, getCurrentTime } = require('test-npm-publish-simple');

// Greet someone
console.log(greet()); // "Hello, World! Welcome to our simple npm package."
console.log(greet('Alice')); // "Hello, Alice! Welcome to our simple npm package."

// Add two numbers
console.log(add(5, 3)); // 8

// Get current time
console.log(getCurrentTime()); // "2026-03-05T..."
```

## API

### `greet(name?)`
- **name** (string, optional): Name of the person to greet. Defaults to 'World'.
- **Returns**: A greeting string

### `add(a, b)`
- **a** (number): First number
- **b** (number): Second number
- **Returns**: Sum of the two numbers
- **Throws**: Error if arguments are not numbers

### `getCurrentTime()`
- **Returns**: Current date and time as ISO string

## Scripts

- `npm start`: Run the main file to see demo output
- `npm test`: Run tests

## License

MIT