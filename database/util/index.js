const mongoose = require("mongoose");

module.exports.connection = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.log(error);
    throw error;
  }
};
