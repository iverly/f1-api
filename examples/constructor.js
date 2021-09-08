const F1 = require('../dist/index');

F1.getCurrentConstructors()
    .then(console.log);

F1.getConstructors('2018')
    .then(console.log);

F1.getConstructorInformation('mercedes')
    .then(console.log);