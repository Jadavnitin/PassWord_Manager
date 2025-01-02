require("dotenv").config();
require("./db/conn");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const bcyrpt = require("bcrypt");
const FormDetail = require("./models/models");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 2000;


const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../templates/views")
const partial_path = path.join(__dirname, "../templates/partials")

app.use(express.static(static_path));



app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partial_path);

app.use(cookieParser());


app.get("/home", (req, res) => {
   res.render("home")
})

app.get("/download", (req, res) => {
   res.render("download");
})
app.get("/contact", (req, res) => {
   res.render("contact");
})
app.get("/affiliates", (req, res) => {
   res.render("affiliates");
})
app.get("/donation", (req, res) => {
   res.render("donation");
})
app.get("/status", (req, res) => {
   res.render("status");
})
app.get("/pricing", (req, res) => {
   res.render("pricing");
})
app.get("/servers", (req, res) => {
   res.render("servers");
})


app.get("/main", (req, res) => {
   res.render("main");
})
app.get("/import", (req, res) => {
   res.render("import");
})
app.get("/settings", (req, res) => {
   res.render("settings");
})


app.get("/signup", (req, res) => {
   res.render("signup");
})


app.post("/signup",async (req, res) => {
   try {
      const { region, username, email, password, termsAccepted } = req.body;


      if (!termsAccepted) {
         return res.status(400).json({ error: "You must accept the Terms of Service." });
      }

      const user = new FormDetail({
         region,
         username,
         email,
         password,
         termsAccepted: req.body.termsAccepted === 'on',
      });

      // Save user to the database
      await user.save();

      // Generate JWT token
      const token = await user.generateAuthToken();
      return res.redirect("/login");


   } catch (error) {
      if (error.code === 11000) {
         return res.status(400).json({ error: "Email or username already exists." });
      }
      console.error(error);
      res.status(500).json({ error: "An error occurred during signup." });
   }

});


app.get("/login", (req, res) => {
   res.render("login");
})

app.post("/login", async(req, res) => {
   try {
      const username = req.body.username;
      const password = req.body.password;
      const region = req.body.region;
      
      const userName = await FormDetail.findOne({ username: username });
      const isMatch = await bcyrpt.compare(password, userName.password);
     
      const token = await userName.generateAuthToken();
      // console.log("token part is :-",token)

      res.cookie('jwt',token ,{
         httpOnly: true, // Prevent JavaScript access
         secure: false,  // Use true in production for HTTPS
         sameSite: 'Strict', // Prevent cross-site requests
         expires: new Date(Date.now() + 1200000) // 20 min form now in milliseconds
      });
      
      if (isMatch && region === userName.region) {
      
        res.status(201).redirect("/main");
        return;
     }
     else if (!userName) {
        return res.status(400).send("User not found");
     }
        
     else {
        return res.send("invalid password details");
      }
      
   } catch (error) {
      res.status(400).send("invalid login details");
   }

});




app.get("/signout",auth, async(req, res) => {

   try {
     
      // console.log(req.userData);

      // single device logout or signout
      // req.userData.tokens = req.userData.tokens.filter((currElement) => {
      //    return currElement.token !== req.token;
      // })

      //all device logout or signout
      req.userData.tokens = [];
      res.clearCookie("jwt");
      console.log("signout sucessfully");
      await req.userData.save();
      res.redirect("/login");

   } catch (error) {
      res.status(500).send(error);
   }

   

})



app.listen(port, () => {
   console.log(`server is runnning at ${port}`);
})