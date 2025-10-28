const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/RoleBased", 
//     {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }
)
.then(() => {
    console.log("### Mongo DB successfully Connected successfully.  ###");
}).catch((err) => {
    console.log(err);
    console.log(err.message);
});