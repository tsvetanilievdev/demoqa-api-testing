# Test Overview

This project contains tests for the Book Store API, documentation: https://demoqa.com/swagger/ .
Each test verifies the response status code, the response body structure, and the values of certain response body properties.


# Test Scripts Execution Guide

This guide provides instructions on how to run the test scripts for this project.

## Frameworks and Tools Used

This project uses the following frameworks and tools:

-   [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [npm](https://www.npmjs.com/): A package manager for Node.js.
-   [Mocha](https://mochajs.org/): A JavaScript test framework running on Node.js.
-   [Chai](https://www.chaijs.com/): A BDD / TDD assertion library for Node.js.
-   [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.
-   [Mocha Reporter](https://www.npmjs.com/package/mochawesome): A mocha test reporter that generates a full fledged HTML/CSS report that helps visualize your test suites.

## Installation

First, install the project dependencies:

```bash
npm install
```

## Running the Tests

### To run the test scripts, use the following command:

```bash
npm run test
```

### To execute test scripts with a reporter, use the following command:

```bash
npm run test:report
```
