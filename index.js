var env = process.env.NODE_ENV || 'development';

var exec = require('child_process').exec;
var knex = require('knex')(require('./knexfile')[env]);

var stylesheetName = process.argv[2];
var stylesheetURL = process.argv[3];

exec(stylesheetURL + ' | xargs curl -s | ./node_modules/.bin/parker -s --format=json', function (error, stdout, stderr) {
  if (error) {
    throw Error(error);
  }

  if (stdout) {
    // Format the output.
    var row = JSON.parse(stdout);
    row['unique-colours'] = row['unique-colours'].toString();
    row['media-queries'] = row['media-queries'].toString();

    row['stylesheet'] = stylesheetName;

    console.log('Inserting stylesheet analysis of ' + stylesheetName + ' into database.');

    // Store the output.
    knex('stats')
      .insert(row)
      .then(function() {
        console.log('Insert completed successfully.');
        knex.destroy();
        process.exit();
      })
      .catch(function(e) {
        throw Error(e);
      });
  }
});
