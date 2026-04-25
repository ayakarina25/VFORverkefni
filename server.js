const express = require("express");
const path = require("path");
const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const mainRoutes = require("./src/routes/mainRoutes");
app.use("/", mainRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
