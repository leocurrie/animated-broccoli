# Element Grouper - Coding Exercise

## What is this?

This is a library function to take an array and group it into N smaller arrays.

The name of the exported function is `groupArrayElements`

## How to run

To quickly see the output from some sample input, run the following:

```bash
node dist/example.js
```

## Development

### Prerequisites

You will need Node.js (v16) and npm.

### Install dependencies

```bash
npm install
```

### Code Linting

[Eslint](https://eslint.org/) is used for linting.
The configuration is in `.eslintrc`

```bash
npm run lint
```

### Run unit tests

[Jest](https://jestjs.io/) is used for testing.
The Jest configuration is stored in `package.json`

```bash
npm test
```

### Build library

This library and the tests are written in [TypeScript](https://www.typescriptlang.org/).

The TypeScript configuration is stored in `tsconfig.json`.

To transpile the TypeScript run

```bash
npm run build
```

This will output JavaScript to the `dist` folder
