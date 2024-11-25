/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable("product", (table) => {
      table.increments("id").primary();
      table.string("category").notNullable();
      table.string("type").notNullable();
      table.string("product_name").notNullable();
      table.decimal("price_gbp", 10, 2).notNullable();
      table.text("description").defaultTo("");
      table.text("options").defaultTo("");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("order", (table) => {
      table.increments("id").primary();
      table.integer("table_number").notNullable();
      table
        .enum("status", ["Processing", "Completed"])
        .notNullable()
        .defaultTo("Processing");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("order_product", (table) => {
      table.increments("id").primary(); // Primary key for order items
      table
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("order")
        .onDelete("CASCADE"); // Foreign key to orders table
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("product")
        .onDelete("CASCADE"); // Foreign key to products table
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable("products")
    .dropTable("orders")
    .dropTable("order_items");
}
