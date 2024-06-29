// Imports
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Environment Variables
const { admin, password, PORT, appName } = process.env;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const productRoutes = require("./routes/product.route");

app.use("/api/products", productRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello from the Node Server!");
});

mongoose
  .connect(
    `mongodb+srv://${admin}:${password}@${appName.toLowerCase()}.obeopd2.mongodb.net/?retryWrites=true&w=majority&appName=${appName}`
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database");
    console.log(err);
  });
