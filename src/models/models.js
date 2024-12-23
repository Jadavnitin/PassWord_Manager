const mongoose = require("mongoose");
const validator = require("validator");
const bcyrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

const mySchema = new mongoose.Schema({
   // region: {
   //    type: String,
   //    required: true,
   //    default: "Europe",
   // },
   region: {
      type: String,
      required: true,
      default: "Europe",
      validate: {
         validator: function (value) {
            // Allow only 'Europe' or 'America' if enum is selected
            const enumValues = ['Europe', 'America'];
            if (enumValues.includes(value)) {
               return true; // Valid enum value
            }

            // Allow any custom input as long as it's a non-empty string
            return typeof value === 'string' && value.trim().length > 0;
         },
         message: 'Invalid region. Please select from the predefined list or enter a custom region.'
      }
   },
   
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    
      validate(value) {
         if (!validator.isEmail(value)) {
            throw new Error("email is invaid");
        } 
      }
      
   },
   password: {
      type: String,
      required: true,
   },
  
   termsAccepted: {
      type: Boolean,
      required: true,
      default: false,
   },
   
   tokens: [{
      token: {
         type: String,
         required: true,
         
      }
   }],
   
});

mySchema.methods.generateAuthToken = async function () {
   
   try {
   
      const token = jwt.sign({ _id: this._id.toString() }, process.env.SECERET_KEY);
      this.tokens = [...this.tokens, { token }];
      await this.save();
      return token; 
     
   }
   catch (error) {
      res.send(err)
      console.log(err);
      
    }
}


mySchema.pre("save",async function(next) {
   
   if (this.isModified("password")) {
      this.password = await bcyrpt.hash(this.password, 10);
   }
   next();
})


const myModels = mongoose.model("FormDetail", mySchema);


module.exports = myModels;