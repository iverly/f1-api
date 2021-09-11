const f1 = require('../dist/index');

f1.getCurrentDriverStandings()
    .then(console.log)

f1.getDriverStandings('2020')
    .then(console.log)

f1.getDriverStandings('2018', 8)
    .then(console.log)

f1.getCurrentConstructorStandings()
    .then(console.log)

f1.getConstructorStandings('2020')
    .then(console.log)

f1.getConstructorStandings('2018', 8)
    .then(console.log)