const express = require("express");
const database = require("./database");
const taskRoute = require("./routes/taskRoutes");

const app = express();
const port = process.env.PORT || 3000;

database
  .sync({ force: false })
  .then(() => {
    console.info("Database synced");
  })
  .catch((err) => {
    console.error("Failed to sync database: " + err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Task Management Applications",
  });
});

app.use("/", taskRoute);

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
