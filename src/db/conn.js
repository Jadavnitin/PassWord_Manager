const mongoose = require("mongoose");

mongoose.connect(process.env.DB_NAME).then(() => {
   console.log("databse is connected")
}).catch(() => {
   console.log("database is not connected");
})