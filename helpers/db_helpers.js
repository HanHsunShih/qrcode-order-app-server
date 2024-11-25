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
