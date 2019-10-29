# Question 1
## Write a sum method which will work properly when invoked using either syntax below.

```javascript
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
```

## Implementation
1. Sum logic is implemented using JavaScript Closure. [Detailed implementation can be found inside src > index.js. ](src/index.js)
2. Unit test is written using Facebook Jest framework. [Detailed implementation can be found inside test > index.test.js. ](test/index.test.js)
3. index.js and index.test.js files are written in modern JavaScript ES6 syntaxes such as arrow function expression instead of using normal function keyword of ES5.

## How to run unit test
1. Download git to your machine from https://git-scm.com/downloads.
2. Clone this repo to your local machine by running `git clone https://github.com/NickPyae/question1.git`.
3. Download and install Node.js 12.13.0 LTS from https://nodejs.org/en/.
4. Change directory (cd) into your cloned repo from your terminal.
5. Run `npm install` from your terminal to install dependencies.
6. Run `npm run test` from your terminal to run unit tests.
