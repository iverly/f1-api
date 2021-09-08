const f1 = require('../dist/index');

f1.getCurrentConstructors()
    .then(console.log);

f1.getConstructors('2018')
    .then(console.log);

f1.getConstructorInformation('mercedes')
    .then(console.log);