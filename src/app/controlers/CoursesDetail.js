const coureses = require('../models/Coureses');
const {mongooseToObject} = require('../../../utils/mongoose')
class CoursesDetail {
    index(req,res){
        coureses.findOne({slug:req.params.slug})
            .then(course =>{
                res.render('courses/show',{course: mongooseToObject(course)});
            })
        // res.send('sds'+ req.params.slug);
    }
}
module.exports = new CoursesDetail;