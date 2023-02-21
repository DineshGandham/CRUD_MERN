const mongoose = require("mongoose");


const DB = "mongodb+srv://dinesh_user:dinesh123@cluster0.c2afht1.mongodb.net/mernstack?retryWrites=true&w=majority";
// const DB = "mongodb://mongo-db:27017";
mongoose.set("strictQuery", true);

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(console.error.message));