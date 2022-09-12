exports.up = knex => knex.schema.createTable("goals", table => {
  table.increments('id').primary()
  table.integer('user_id').references("id").inTable("users").onDelete("CASCADE")
  table.integer('financial_note_id').references("id").inTable("financial_notes")

  table.text('name').notNullable()
  table.timestamp('created_at').default(knex.fn.now())
  table.integer('total_value').notNullable()

  table.text('status').notNullable()
  table.text('photo')
});

exports.down = knex => knex.schema.dropTable("goals");
