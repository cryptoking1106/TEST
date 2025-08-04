# Hello World Package

A simple Node.js package that provides functions to print and return "helloworld".

## Installation

```bash
npm install
```

## Usage

### Running the package directly

```bash
npm start
# or
node index.js
```

This will print "helloworld" to the console.

### Using in other code

```javascript
const helloWorldPackage = require('./index.js');

// Function that prints and returns "helloworld"
const result = helloWorldPackage.helloWorld();
console.log('Returned:', result);

// Function that only returns "helloworld" (no printing)
const message = helloWorldPackage.getHelloWorld();
console.log('Message:', message);

// Function that only prints "helloworld" (no return)
helloWorldPackage.printHelloWorld();
```

### Running the example

```bash
node example.js
```

## Available Functions

- `helloWorld()` - Prints "helloworld" to console and returns the string
- `getHelloWorld()` - Returns "helloworld" string without printing
- `printHelloWorld()` - Prints "helloworld" to console without returning anything

## Package Structure

```
hello-world-package/
├── package.json
├── index.js          # Main package file
├── example.js        # Usage example
└── README.md         # This file
``` 