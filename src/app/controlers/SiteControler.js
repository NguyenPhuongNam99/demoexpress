const Course = require("../models/Course");
const abc = require("../models/abc");
class SiteControlers {
  async index(req, res) {
    // abc.find({}, function(err, courese){
    //     if(!err){
    //         console.log('thanh cong')
    //         res.send(courese);
    //         console.log('courese api', courese);
    //     }
    //     else{
    //         console.log('that bai')
    //         res.status(400).json({error: 'Error'})

    //     }
    // });
   
      // try {
      //   const data = await abc.createProduct({name: 'naaa'});
      //   res.status(200).send(data);
      //   console.log('data', data)
      // } catch (error) {
      //   res.status(203).send({ message: "Get Product Failed" });
      // }
    
      try {
        const data = await abc.getProduct();
        res.status(200).send(data);
        console.log('data', data)
      } catch (error) {
        res.status(203).send({ message: "Get Product Failed" });
      }
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteControlers();
