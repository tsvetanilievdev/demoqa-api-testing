# Test Overview

This project contains tests for the Book Store API, documentation: https://demoqa.com/swagger/ .
Each test verifies the response status code, the response body structure, and the values of certain response body properties.

## Test Tasks

1. Write tests for the different types of possible errors when creating a new user. Each error should be validated.
2. Create a new user and validate that it has been created.
3. From the list of all books, select one and add it to the preferred books (collection). Validate that the book has been added.
4. Add a book with a non-existent ISBN number to the preferred books (collection). Validate the error.
5. From the list of all books, select another book to replace the first one in the preferred books (collection). Validate that the book has been replaced.
6. Validate that the book with ISBN number 9781491904244 has 278 pages.
7. Remove the book from the preferred books (collection). Validate that the book has been removed.
8. From the preferred books (collection), remove a book that has not been added to it. Validate the error.

# Test Scripts Execution Guide

This guide provides instructions on how to run the test scripts for this project.

## Frameworks and Tools Used

This project uses the following frameworks and tools:

-   [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
-   [npm](https://www.npmjs.com/): A package manager for Node.js.
-   [Mocha](https://mochajs.org/): A JavaScript test framework running on Node.js.
-   [Chai](https://www.chaijs.com/): A BDD / TDD assertion library for Node.js.
-   [Axios](https://axios-http.com/): A promise-based HTTP client for the browser and Node.js.

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
