import express from "express";
import routes from "./src/routes/crmRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
});

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serving static files
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) =>
  res.send(`Node.js and Express server is running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
