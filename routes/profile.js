var express = require('express');
var app = express();

/* GET profile page. */
app.get('/', function(req, res, next) {
  let arr = res.
  res.render('profile', {arr});
});

// /* GET edit page. */
// app.get('/edit', function(req, res, next) {
//   res.render('profile-edit');
// });

// /* ADD country page. */
// app.get('/add-country', function(req, res, next) {
//     res.render('country-add');
//   });

module.exports = app;
  