import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const getAllContents = async (tableName) => {
  try {
    return await knex(tableName);
  } catch (error) {
    throw new Error("Error fetching Table information:" + error);
  }
};

export const getItemWithId = async (tableName, productId) => {
  try {
    const item = await knex(tableName).where({ id: productId }).first();
    return item;
  } catch (error) {
    throw new Error("Error fetching product information:" + error);
  }
};

// export const
