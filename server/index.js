const express = require("express");
const http = require("http");
const WebSocket = require('ws');


require("./config/database");
require("dotenv").config()

const bodyParser = require("body-parser");
const lostItemRoutes = require("./routes/lostitem");
const founditem_routes = require("./routes/founditem");
const auth_routes = require("./routes/auth");
const cors = require("cors")


const {
  handleResourceNotFound,
  handleServerError,
} = require("./middleware/error");

const app = express();

app.use(
  cors({
    origin: "*",
  })
)

app.use(bodyParser.json());

app.use(express.json());

app.use("/api/lostitems", lostItemRoutes);
// Found Items endpoint
app.use("/api/findings", founditem_routes);

// User signup signin endpoint
app.use(auth_routes);

app.use(handleResourceNotFound);

app.use(handleServerError);

app.listen(8000, () => {
  console.log("Server started.");
});
