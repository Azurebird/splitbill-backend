import bodyParser from "body-parser";
import express from "express";
import routes from "./server/routes";
import mongo from "./config/mongo";

const app = express();
const port = 8080;

app.use(bodyParser.json());
routes(app);
mongo();

app.listen(port, () => console.log(`Server working on port ${port}`));
