(function() {
  var table = 'entries';
  var exec = require('child_process').exec;
  var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL,
    debug: false
  });
  var stylesheetURL = process.argv[2];

  var run = knex.schema.hasTable(table).then(function(exists) {
    if (!exists) {
      console.log('Creating a table named \'' + table + '\'.');
      return knex.schema.createTable(table, function(t) {
        t.increments('id').primary();
        t.integer('total-stylesheets');
        t.integer('total-stylesheet-size');
        t.integer('total-rules');
        t.integer('total-selectors');
        t.integer('total-identifiers');
        t.integer('total-declarations');
        t.decimal('selectors-per-rule');
        t.decimal('identifiers-per-selector');
        t.decimal('specificity-per-selector');
        t.integer('top-selector-specificity');
        t.text('top-selector-specificity-selector');
        t.integer('total-id-selectors');
        t.integer('total-unique-colours');
        t.text('unique-colours');
        t.integer('total-important-keywords');
        t.integer('total-media-queries');
        t.text('media-queries');
        t.timestamp('created_at').defaultTo(knex.raw('now()'));
      }).then(function() {
        console.log('Table created successfully.');
        console.log('Run this command again to analyze the CSS and store it in the database.');
        knex.destroy();
        process.exit();
      });
    } else {
      console.log('Fetching the CSS and analyzing with Parker.');

      exec(stylesheetURL + ' | xargs curl -s | ./node_modules/parker/parker.js -s --format=json', function (error, stdout, stderr) {
        if (stdout) {
          // Format the output.
          var row = JSON.parse(stdout);
          row['unique-colours'] = row['unique-colours'].toString();
          row['media-queries'] = row['media-queries'].toString();

          console.log('Inserting the analysis into a database.');

          // Store the output.
          knex(table).insert(row)
            .then(function() {
              console.log('Insert completed successfully.');
              knex.destroy();
              process.exit();
            })
            .catch(function(e) {
              console.error(e);
              process.exit();
            });
        }
      });
    }
  }).catch(function(e) {
    console.error(e);
  });
})();
