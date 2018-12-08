const express = require('express');
const app = express();
const path = require('path');
const promise = require('bluebird');
const options = { promiseLib: promise };
const pgp = require('pg-promise')(options);
var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'coding_challenge'
});

// app.set('view engine', 'pug');
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('index', { title: 'This is the title', message: 'This is the message.' })
// });

app.get('/', function(req, res) {  
  res.sendFile('/views/index.html');
});

app.get('/api/movies', function(req, res, next) {
	db.any('SELECT * FROM untitled_table')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all movies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

// /api/movies/year/2008
app.get('/api/movies/year/:year', (req, res, next) => {
  db.many('SELECT * FROM untitled_table WHERE "startYear" = $1', req.params.year)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: `Retrieved movies from year ${req.params.year}`
        });
    })
    .catch(function (err) {
      return next(err);
    });
});


app.get('/api/movies/genre/:genre', (req, res, next) => {
  var sort1 = '';
  var sort2 = '';
  var sort3 = '';

  if (req.query.sort) {
    sort1 += `, ratings`;
    sort2 += `(untitled_table.tconst = ratings.tconst) AND`;
    sort3 += ` ORDER BY "averageRating" desc`;
  }
// SELECT * FROM untitled_table, ratings WHERE (untitled_table.tconst = ratings.tconst) ORDER BY "averageRating";
  var sql = `SELECT * FROM untitled_table ${sort1} WHERE ${sort2} ("genres" ILIKE \'%${req.params.genre}%\') ${sort3}`;

  if (req.query.year) {
    sql += ` AND ("startYear" = '${req.query.year}')`;
  }

  // Debug SQL statement for testing. Outputs SQL query string to page.
  // res.send(sql);

  db.many(sql)
    .then(function (data) {
      res.status(200)
        .json({
          // sql: sql,
          status: 'success',
          data: data,
          message: 'Retrieved movies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
});

// app.get('/api/movies/:id', (req, res) => {
//   const movie = movies.find(c => c.id === parseInt(req.params.id));
//   if (!movie) res.status(404).send('The course with the given ID was not found.');
//   res.send(movie);
// });

const port = process.env.PORT || 3000;
// To use environment variable: Type "export PORT=5000" in terminal without quotes on Mac
app.listen(port, () => console.log(`Listening on port ${port}...`));