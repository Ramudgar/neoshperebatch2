const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
app.use(express.json());
connectDB();
app.use(userRoutes);
// make public folder static
app.use("/public", express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(` app listening on port ${port} !`);
});
