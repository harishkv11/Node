//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const port = 3000;
const correctPassword = "ILoveProgramming";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/check', (req, res) => {
    const password = req.body.password;
    if(password === correctPassword) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.redirect("/");
    }
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})