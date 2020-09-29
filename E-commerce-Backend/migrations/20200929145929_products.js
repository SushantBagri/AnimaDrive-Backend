exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments().primary();
    table.string("product_name", 255).notNullable();
    table.integer("price").notNullable();
    table.string("shot_desc", 255).notNullable();
    table.string("thumnail", 1024).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};