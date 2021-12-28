
require("dotenv").config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "../routes/web";
import bodyParser from "body-parser";
import initCronJob from "./config/cronJob";

let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

configViewEngine(app);
initWebRoutes(app);
initCronJob();

const port = process.env.PORT || 8000;

app.listen(port, host, () => {
  console.log(`server is running on port ${port}`)
});
