// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var loopList =[];
loopList.push({
              name: 'Nine Inch Nails',
              instrument: 'The Downward Spiral',
              tags: [ 'industrial', 'industrial metal' ],
              loopUrl: 'audio/drum1'
            });
loopList.push({
              name: 'Nine Inch Nails',
              instrument: 'The Downward Spiral',
              tags: [ 'industrial', 'industrial metal' ],
              loopUrl: 'audio/drum2'
            });
loopList.push({
              name: 'Nine Inch Nails',
              instrument: 'The Downward Spiral',
              tags: [ 'industrial', 'industrial metal' ],
              loopUrl: 'audio/bass1'
            });
loopList.push({
              name: 'Nine Inch Nails',
              instrument: 'The Downward Spiral',
              tags: [ 'industrial', 'industrial metal' ],
              loopUrl: 'audio/bass2'
            });


db.Loop.remove({}, function(err, loops){

  db.Loop.create(loopList, function(err, loops){
    if (err) { return console.log('ERROR', err); }
    console.log("all loops:", loops);
    console.log("created", loops.length, "loops");
    process.exit();
  });

});
