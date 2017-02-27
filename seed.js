// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var loopList =[];
loopList.push({
              name: 'Andy Rodrigues',
              instrument: 'Drums',
              tags: [ 'house', 'tribal' ],
              loopUrl: '/audio/drum1.wav'
            });
loopList.push({
              name: 'MoNKEY',
              instrument: 'Drums',
              tags: [ 'electro', '808' ],
              loopUrl: '/audio/drum2.wav'
            });
loopList.push({
              name: 'Lunchtime',
              instrument: 'Bass',
              tags: [ 'electro', 'synth' ],
              loopUrl: '/audio/bass1.wav'
            });
loopList.push({
              name: 'Old School',
              instrument: 'Keys',
              tags: [ 'House', 'organ' ],
              loopUrl: '/audio/keys.wav'
            });


db.Loop.remove({}, function(err, loops){

  db.Loop.create(loopList, function(err, loops){
    if (err) { return console.log('ERROR', err); }
    console.log("all loops:", loops);
    console.log("created", loops.length, "loops");
    process.exit();
  });

});
