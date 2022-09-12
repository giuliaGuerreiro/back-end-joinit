exports.up = knex => knex.schema.createTable("links", table => {
  table.increments('id').primary()
  table.integer('goal_id').references("id").inTable("goals").onDelete("CASCADE")

  table.text('url').notNullable()
  table.timestamp('created_at').default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("links");
