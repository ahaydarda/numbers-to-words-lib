# numbers-to-words-lib
A small library to convert numbers in numerical format into words in a languages.

It exposes ```INumbersToWordsFunc``` interface implementation which accepts a number value 
and optional language flag (by default it is English)
and converts the number into words in that language.

```typescript

export interface INumbersToWordsFunc {
  (value: number, language?: string): string;
}
```

##Supported Languages
Flags:
* EN : English
* ?

  
## How to use
the project is publised to npm global repositroy.
install it by npm or  yarn add
  ### `npm install numbers-to-words-lib `  
  
then you can import the numbersToWords function into your project:
```typescript

import { numbersToWords} from 'numbers-to-words-lib'
....

 //returns  "one hundred and forty-seven"
numbersToWords("147","En") 

//by default it is english words
// returns  "one hundred and forty-seven"
numbersToWords("147")

```
  


## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).
