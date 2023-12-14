const mongoose = require("mongoose");

async function connect() {
  const URL = process.env.MONGO_URI;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Unable to connect to the database", err);
  }
}

module.exports = { connect };
