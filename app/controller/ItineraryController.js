var Itenerary = require('..models/itinerary');


module.exports = {
  create: function(res, data){
    itenerary.create(data).then(function){
      console.log('fired');
      res.redirect('/');
    })
  }
}