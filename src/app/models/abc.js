const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const abc = new Schema({
  name: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  decription: { type: String, maxLength: 600 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, defaul: Date.now },
});
abc.statics = {
  createProduct(item) {
    return this.create(item);
  },
  getProduct() {
    return this.find({}).exec();
  },
};
module.exports = mongoose.model("quys", abc);
