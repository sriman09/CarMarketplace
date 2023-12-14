const express = require("express");
const { connect } = require("./utils/dbConntection");
require("dotenv").config();
const carRoutes = require("./routes/Cars");
const brandRoutes = require("./routes/Brands");
const modelsRoutes = require("./routes/Models");

const app = express();

const PORT = process.env.PORT || 8001;

app.use(express.json());

app.use("/cars", carRoutes);

app.use("/brands", brandRoutes);

app.use("/models", modelsRoutes);

app.use("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, async () => {
  console.log(`Listening at port ${PORT}`);
  await connect();
});
