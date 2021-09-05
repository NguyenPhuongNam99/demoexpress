const coureses = require('../models/Coureses');

class Coureses {
    index(req, res){
        // coureses.find({},function(err, courses){
        //     if(!err){
        //         console.log('success nhe');
        //         res.send(courses)
        //     }
        //     else{
        //         console.log('that bai b');
        //         res.status(400).json({error: 'Error'});
        //     }
        // })

        //promise
        coureses.find({})
            .then(courses =>{
               courses= courses.map(course =>course.toObject()),
                res.render('home',{courses})
            })
            .catch(error => next(error));
    }
    show(req,res){
        res.send('dsd')
    }
}
module.exports = new Coureses();