const express = require("express");
const morgan = require("morgan")
const path = require('path');
// const exphbss = require('express-handlebars');
const handlebars  = require('express-handlebars');

const app = express();

//HTTP logger -log xem server cos chajy hay ko , xem trinh duyet gui request
// app.use(morgan('combined'))
//load anh 
app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine('hbs', handlebars({
  //viet tat file
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// console.log(__dirname);
//C:\Users\namn3\blogExpress\src

// app.engine('handlebars', exphbs());
//midlware
//midlaware xu ly tu html 
app.use(express.urlencoded({extended:true}));
//midlware xu ly voi js laf XML,aixos, fetch 
app.use(express.json());

const port = 3000;
app.get("/news", (req, res) => {

  return res.render('news')
});

app.get('/search',(req,res) =>{
  console.log("res",req.query);
  return res.render('search');
})

// app.post('/search',(req,res)=>{
//   return res.render('search');
// })
app.post('/search',(req,res)=>{
  console.log('body', req.body);
  return res.send('');
})
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
