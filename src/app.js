require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/cv", require("./routes/cv"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});
