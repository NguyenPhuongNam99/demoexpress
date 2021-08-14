const express = require("express");
const morgan = require("morgan")
const path = require('path');
// const exphbss = require('express-handlebars');
const handlebars  = require('express-handlebars');

const app = express();

//HTTP logger
app.use(morgan('combined'))
//load anh 
app.use(express.static(path.join(__dirname, 'public')))
//Template engine
app.engine('hbs', handlebars({
  //viet tat file
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

console.log(__dirname);
//C:\Users\namn3\blogExpress\src

// app.engine('handlebars', exphbs());

const port = 3000;
app.get("/news", (req, res) => {

  return res.render('news')
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
