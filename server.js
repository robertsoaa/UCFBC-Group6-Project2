// =================================================================
// Dependencies
// =================================================================
require("dotenv").config();

const express = require('express');

const session = require('express-session');
const db = require("./models");
var passport   = require('passport');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars')
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");
// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

//Routes
var authRoute = require('./routes/auth.js')(app,passport);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var env = require('dotenv').load();
 
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

//Models
//var models = require("./app/models");
 

// //For Handlebars
// app.set('views', './app/views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

// Handlebars
//app.set('views', './views');
//app.engine(
 // "handlebars",
//  exphbs({
//    defaultLayout: "main"
//  })
//);
//app.set("view engine", "handlebars");




//Sync Database
// db.sequelize.sync().then(function() {
 
//     console.log('Nice! Database looks fine')
 
// }).catch(function(err) {
 
//     console.log(err, "Something went wrong with the Database Update!")
 
// });

db.sequelize.sync().then(function() {
 
  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function(err) {
 
  if (!err)
      console.log(
              "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
              PORT,
              PORT
            );
  else console.log(err)

});

// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

////////

// var db = require("./models");

// var app = express();
// var PORT = process.env.PORT || 3000;



// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

module.exports = app;

