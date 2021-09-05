const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  decription: { type: String, maxLength: 600 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, defaul: Date.now },
});
Course.statics = {

  getProduct(){
      return this.find({}).exec();
  },
  
}
module.exports = mongoose.model('courese', Course);
