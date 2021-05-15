/* eslint-disable no-console */
const Sequelize = require("sequelize");

const db = new Sequelize("PetGoHome", "root", "password123", {
  host: "petgohome.cyazxyujehyt.us-west-2.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sync({ force: true });

module.exports = db;
