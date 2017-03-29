var express=require("express");
var app=express();
var router=require("./controller");
app.set("view engine","ejs");
//路由中间件
app.use(express.static("./public"));
//首页封装到了一个routerjs文件中
app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);
app.listen(80);
