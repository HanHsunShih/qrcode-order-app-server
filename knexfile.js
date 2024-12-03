// Import dotenv to process environment variables from `.env` file.
import "dotenv/config";

export default {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: "utf8",
  },

  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      return result.map(processDecimals);
    }

    return processDecimals(result);
  },
};

const processDecimals = (row) => {
  if (!row || typeof row !== "object") return row;

  for (const key in row) {
    if (
      row[key] &&
      row[key].constructor &&
      row[key].constructor.name === "String"
    ) {
      if (!isNaN(row[key])) {
        row[key] = parseFloat(row[key]);
      }
    }
  }

  return row;
};
