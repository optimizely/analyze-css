var http = require('http');
var httpPort = process.env.PORT || 7360;
var exec = require('child_process').exec;
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || 'postgres://doconnor:@localhost/analyze-css',
  debug: false
});
var table = 'entries';

// knex.schema.hasTable(table).then(function(exists) {
//   if (!exists) {
//     console.log('Creating a table named \'' + table + '\'.');
//     return knex.schema.createTable(table, function(t) {
//       t.increments('id').primary();
//       t.integer('total-stylesheets');
//       t.integer('total-stylesheet-size');
//       t.integer('total-rules');
//       t.integer('total-selectors');
//       t.integer('total-identifiers');
//       t.integer('total-declarations');
//       t.decimal('selectors-per-rule');
//       t.decimal('identifiers-per-selector');
//       t.decimal('specificity-per-selector');
//       t.integer('top-selector-specificity');
//       t.text('top-selector-specificity-selector');
//       t.integer('total-id-selectors');
//       t.integer('total-unique-colours');
//       t.text('unique-colours');
//       t.integer('total-important-keywords');
//       t.integer('total-media-queries');
//       t.text('media-queries');
//       t.timestamp('created_at').defaultTo(knex.raw('now()'));
//     }).then(function() {
//       console.log('Table created successfully.');
//       knex.destroy();
//     });
//   } else {
//     console.log('Fetching the CSS and analyzing with Parker.');
//     exec('curl https://www.optimizely.com/signin -s | grep -o /master-[0-9]*\.[0-9]*/ | head -1 | awk \'{print "https://www.optimizely.com"$1"dist/css/app.css"}\' | xargs curl -s | ./node_modules/parker/parker.js -s --format=json', function (error, stdout, stderr) {
//       // Format the output.
//       var row = JSON.parse(stdout);
//       row['unique-colours'] = row['unique-colours'].toString();
//       row['media-queries'] = row['media-queries'].toString();
//
//       console.log('Inserting the analysis into a database.');
//
//       // Store the output.
//       knex(table).insert(row)
//         .then(function() {
//           console.log('Insert completed successfully.');
//           knex.destroy();
//         })
//         .catch(function(e) {
//           console.error(e);
//         });
//     });
//   }
// });

// Make this work in Heroku.
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(httpPort, '127.0.0.1');
console.log('Server running at http://127.0.0.1:' + httpPort + '/');
