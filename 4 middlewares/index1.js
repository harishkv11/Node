import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  console.log(req.body.street);
  const name = req.body.street + req.body.pet;
  res.send(name);
  
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
