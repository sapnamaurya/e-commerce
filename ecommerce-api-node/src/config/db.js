const mongoose = require("mongoose");

const mongoDbUrl = `mongodb+srv://io5sapnamaurya_db_user:saPna12345@ecommerce.mbz48hq.mongodb.net/?appName=ecommerce`;
const connectDb = () => {
  return mongoose.connect(mongoDbUrl);
};

module.exports = { connectDb };
