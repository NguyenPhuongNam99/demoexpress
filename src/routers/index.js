const newsRouter = require("./news");
const siteRouter = require("./Sites");
const courseRouter = require("./courses");
const courseDetail = require("./coursesDetail");
function routers(app) {
  app.use("/news", newsRouter);
  app.use("/",siteRouter);
  app.use("/",courseRouter);
  app.use("/courses",courseDetail);

  app.post("/search", (req, res) => {
    console.log("body", req.body);
    return res.send("");
  });
}
module.exports = routers;
