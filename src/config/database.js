const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shubhamkasar:iamshubham80@devcommune.huumbdw.mongodb.net/devCommune"
  );
};

module.exports = connectDB;