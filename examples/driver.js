const f1 = require('../dist/index');

f1.getCurrentDrivers()
    .then(console.log);

f1.getDrivers('2018')
    .then(console.log);

f1.getDriverInformation('russell')
    .then(console.log);