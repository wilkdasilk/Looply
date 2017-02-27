/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/loops
function index(req, res) {
  db.Loop.find({}, function(err, allLoops) {
    res.json(allLoops);
  });
}


function show(req, res) {
  db.Loop.findById(req.params.loopId, function(err, foundLoop) {
    if(err) { console.log('loopController.show error', err); }
    res.json(foundLoop);
  });
}

function destroy(req, res) {
  db.Loop.findOneAndRemove({ _id: req.params.loopId }, function(err, foundLoop){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundLoop);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Loop.findById(req.params.loopId, function(err, foundLoop) {
    if(err) { console.log('loopController.update error', err); }
    foundLoop.instrument = req.body.instrument;
    foundLoop.name = req.body.name;
    foundLoop.tags = req.body.tags;
    foundLoop.loopUrl = req.body.loopUrl;
    foundLoop.save(function(err, savedLoop) {
      if(err) { console.log('saving altered loop failed'); }
      res.json(savedLoop);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  show: show,
  destroy: destroy,
  update: update
};
