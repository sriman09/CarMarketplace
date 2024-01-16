const express = require("express");
const { connect } = require("./utils/dbConntection");
require("dotenv").config();
const cors = require("cors");
const carRoutes = require("./routes/Cars");
const brandRoutes = require("./routes/Brands");
const modelsRoutes = require("./routes/Models");
const usersRoutes = require("./routes/Users");
const SellInquiryRoutes = require("./routes/SellInquiry");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://car-marketplace-three.vercel.app",
    ],
    credentials: true,
  })
);

const PORT = process.env.PORT || 8001;

app.use(express.json());

app.use("/api", carRoutes);

app.use("/api", brandRoutes);

app.use("/api", modelsRoutes);

app.use("/api", usersRoutes);

app.use("/api", SellInquiryRoutes);

app.use("/", (req, res) => {
  res.send("API is working");
});

app.listen(PORT, async () => {
  console.log(`Listening at port ${PORT}`);
  await connect();
});
