const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/course_education", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect success");
  } catch (error) {
  }
}
module.exports = { connect };
