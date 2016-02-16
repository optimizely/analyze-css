exports.up = function(knex, Promise) {
  Promise = knex.schema.createTable('stats', function(t) {
    t.increments('id').primary();
    t.text('stylesheet');
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
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });

  return Promise;
};

exports.down = function(knex, Promise) {
  Promise = knex.schema.dropTable('stats');
  return Promise;
};
