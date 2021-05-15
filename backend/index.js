const app = require("./app");
const SQLdb = require("./models");
const SqlRouter = require("./routers/router");

app.get("/", (req, res) => {
  res
    .status(200)
    .send("PetGoHome Backend API is Alive!, access the routes to get data!");
});

app.use("/router", SqlRouter);
SQLdb.sequelize.sync().then(() => {
  app.listen(3001, console.log("server started on port 3001"));
});

module.exports = app;
