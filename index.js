import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/about", (req, res)=>{
    res.render("about.ejs");
});

app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.get("/write", (req, res)=>{
    res.render("write.ejs");
});

// app.get("/login", (req, res)=>{
//     res.render("login.ejs");
// });

app.listen(port, ()=>{
    console.log(`Server listening at 'http://localhost:${port}'`)
});