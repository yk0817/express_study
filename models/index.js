var models = require('./models/index.js');

function startApp(){
  models.quotes.findAll().then(function(quotes)){
    for (var i = 0; i < quotes.length; i++) {
      console.log(quotest[i].id + " | " + quotes[i].quote );
    }
  });
}

models.sequlize.sync()
.then(function() {
  startApp();
})
.catch(function (e) {
  throw new Error(e);
});