class NewsControlers{

    //GET news
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.send('Detail News')
    }
}
module.exports = new NewsControlers();