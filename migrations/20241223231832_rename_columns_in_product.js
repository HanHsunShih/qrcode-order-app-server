/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable("product", (table) => {
    table.renameColumn("category-ch", "category_ch");
    table.renameColumn("type-ch", "type_ch");
    table.renameColumn("product_name-ch", "product_name_ch");
    table.renameColumn("description-ch", "description_ch");
    table.renameColumn("options-ch", "options_ch");
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable("product", (table) => {
    table.renameColumn("category_ch", "category-ch");
    table.renameColumn("type_ch", "type-ch");
    table.renameColumn("product_name_ch", "product_name-ch");
    table.renameColumn("description_ch", "description-ch");
    table.renameColumn("options_ch", "options-ch");
  });
}
