exports.up = knex => knex.schema.createTable("financial_notes", table => {
  table.increments('id').primary()
  table.integer('user_id').references("id").inTable("users").onDelete("CASCADE")

  table.integer('value').notNullable()
  table.text('category').notNullable()
  table.text('subcategory')

  table.timestamp('created_at').default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable("financial_notes");
