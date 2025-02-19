if (process.env.MIGRATE_TOOL) {
  require("dotenv").config();
}

const {
  DEV_USERNAME,
  DEV_PASSWORD,
  DEV_DATABASE,
  DEV_HOST,
  DEV_PORT,
  DEV_DIALECT
} = process.env

const dev = {
  username: process.env.DEV_USERNAME,
  password: process.env.DEV_PASSWORD,
  database: process.env.DEV_DATABASE,
  host: process.env.DEV_HOST,
  port: process.env.DEV_PORT,
  dialect: process.env.DEV_DIALECT,
  logging: (msg) => {
    // console.log(msg);
  },
  define: { createdAt: false },
};


module.exports = { development: dev, test: null, production: null };
