/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable("product", (table) => {
    table.string("category-ch").notNullable();
    table.string("type-ch").notNullable();
    table.string("product_name-ch").notNullable();
    table.decimal("price_ntd", 10, 2).notNullable();
    table.text("description-ch").defaultTo("");
    table.text("options-ch").defaultTo("");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable("product", (table) => {
    table.dropColumn("category-ch");
    table.dropColumn("type-ch");
    table.dropColumn("product_name-ch");
    table.dropColumn("price_ntd", 10);
    table.dropColumn("description-ch");
    table.dropColumn("options-ch");
  });
}
