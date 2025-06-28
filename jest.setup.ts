// jest.setup.ts

// Polyfills or global mocks
import 'whatwg-fetch'; // if using fetch in a Node environment
import '@testing-library/jest-dom'; // for extended DOM matchers

// Example: Mocking global variables
globalThis.__TEST__ = true;

// Optional: Suppress console errors during tests
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (!msg.toString().includes('expected error')) {
      console.warn(msg); // Let through other warnings
    }
  });
});
