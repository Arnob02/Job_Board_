const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://arnobdeb10:12345@registration.2df2f4p.mongodb.net/Registration?retryWrites=true&w=majority",
    //"mongodb://127.0.0.1:27017/Registration",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected"))
  .catch((error) => {
    console.log("not connected");
    console.log(error);
    process.exit(1);
  });
