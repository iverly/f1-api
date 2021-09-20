# f1-api

![size logo](https://img.shields.io/github/languages/code-size/iverly/f1-api)
![last logo](https://img.shields.io/github/last-commit/iverly/f1-api)
![license logo](https://img.shields.io/github/license/iverly/f1-api)

A wrapper of Ergast API for Node.js. The easiest way to get data of Formula 1.

## Features

- Get races schedule
- Get driver information
- Get drivers by year
- Get driver standings
- Get constructor information
- Get constructors by year
- Get constructor standings

## Installation

```bash
yarn add f1-api
# or npm install f1-api
```

## Usage

There is a simple example of how work f1-api :

```js
const f1 = require('f1-api');

f1.getDriverInformation('russell')
    .then({id, code, number, firstName, lastName, birthday, nationality} => {
        // do some thing with data !
    });

f1.getConstructorInformation('mercedes')
    .then({id, name, nationality} => {
        // do some thing with data !
    });

f1.getConstructors('2018')
    .then(console.log);

f1.getCurrentDriverStandings()
    .then(console.log)

f1.getCurrentSeasonRacesSchedule()
    .then(console.log)
```

You can find all examples in the `examples` directory.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate and follow Angular instruction for commit name ([here](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)).

## License
[MIT License](https://choosealicense.com/licenses/mit/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.