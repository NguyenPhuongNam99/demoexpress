const newsRouter = require("./news");
const siteRouter = require("./Sites");
function routers(app) {
  // app.get("/news", (req, res) => {

  //     return res.render('news')
  //   });
  app.use("/news", newsRouter);
//   app.get("/search", (req, res) => {
//     console.log("res", req.query);
//     return res.render("search");
//   });
app.use("/",siteRouter);
  // app.post('/search',(req,res)=>{
  //   return res.render('search');
  // })
  app.post("/search", (req, res) => {
    console.log("body", req.body);
    return res.send("");
  });
}
module.exports = routers;
