const f1 = require('../dist/index');

f1.getCurrentSeasonRacesSchedule()
    .then(console.log)

f1.getSeasonRacesSchedule('2018')
    .then(console.log)