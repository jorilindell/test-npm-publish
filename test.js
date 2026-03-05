const { greet, add, getCurrentTime } = require('./index.js');

/**
 * Simple test runner
 */
function runTests() {
  let passed = 0;
  let total = 0;

  function test(description, callback) {
    total++;
    try {
      callback();
      console.log(`✅ ${description}`);
      passed++;
    } catch (error) {
      console.log(`❌ ${description}: ${error.message}`);
    }
  }

  // Test greet function
  test('greet() should return default greeting', () => {
    const result = greet();
    if (result !== 'Hello, World! Welcome to our simple npm package.') {
      throw new Error(`Expected default greeting, got: ${result}`);
    }
  });

  test('greet("Alice") should return personalized greeting', () => {
    const result = greet('Alice');
    if (result !== 'Hello, Alice! Welcome to our simple npm package.') {
      throw new Error(`Expected personalized greeting, got: ${result}`);
    }
  });

  // Test add function
  test('add(2, 3) should return 5', () => {
    const result = add(2, 3);
    if (result !== 5) {
      throw new Error(`Expected 5, got: ${result}`);
    }
  });

  test('add(-1, 1) should return 0', () => {
    const result = add(-1, 1);
    if (result !== 0) {
      throw new Error(`Expected 0, got: ${result}`);
    }
  });

  test('add("a", "b") should throw error', () => {
    try {
      add("a", "b");
      throw new Error('Expected function to throw error for non-numbers');
    } catch (error) {
      if (!error.message.includes('Both arguments must be numbers')) {
        throw new Error(`Wrong error message: ${error.message}`);
      }
    }
  });

  // Test getCurrentTime function
  test('getCurrentTime() should return ISO string', () => {
    const result = getCurrentTime();
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
    if (!isoRegex.test(result)) {
      throw new Error(`Expected ISO date string, got: ${result}`);
    }
  });

  // Summary
  console.log('\n' + '='.repeat(40));
  console.log(`Tests completed: ${passed}/${total} passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed!');
    process.exit(0);
  } else {
    console.log('💥 Some tests failed!');
    process.exit(1);
  }
}

runTests();