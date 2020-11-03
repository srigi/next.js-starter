import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', (table) => {
    table.uuid('id').primary();
    table.string('user_name', 255).notNullable();
    table.string('password', 255).notNullable();
    table.json('roles').notNullable();
    table.timestamp('created_at', { precision: 3, useTz: false }).notNullable().defaultTo(knex.fn.now(3));
    table.timestamp('updated_at', { precision: 3, useTz: false }).defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}
