# lasso-use-strict

[Lasso.js](https://github.com/lasso-js/lasso) transform for adding `use-strict`
to JavaScript files.

## Installation

```bash
npm install lasso-use-strict --save
```

## Usage

```js
const lassoUseStrict = require('lasso-use-strict');

require('lasso').configure({
    ...
    plugins: [
        useStrictPlugin,
        ...
    ]
});

```
