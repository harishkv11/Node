import express from 'express'
import bodyParser from 'body-parser';
import uuid from 'uuid-random'

const PORT = 3000;

let data = [];

const app = express();
// app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get("/books/all", (req, res) => {
    res.send(data);
})

app.post("/books/save", (req, res) => {
    let book = req.body;
    book = {id: uuid(), ...book}
    data.push(book);
    res.send("content loaded")
})

app.get("/books/get/:id", (req,res) => {
    const bookId = req.params.id;
    const retrievedBook = data.filter((book) => book?.id === bookId);
    if(retrievedBook.length > 0) {
        res.send(retrievedBook[0]);
    }
    res.send(`Could not find book by id : ${bookId}`);
})

app.delete('/books/remove/:id', (req, res) => {
    const bookId = req.params.id;
    data = data.filter((book) => book?.id !== bookId);
    res.send(`Book removed with id : ${bookId}`);
})

app.put('/books/update/:id', (req,res) => {
    const bookId = req.params.id;
    let updatedBook = req.body;

    for(let i=0;i<data.length;i++) {
        if(data[i].id === bookId) {
            
            data[i] = {id: uuid(), ...updatedBook};
            break;
        }
    }
    res.send(`Book updated with id : ${bookId}`)
})

app.patch('/books/update/patch/:id', (req, res) => {
    const bookId = req.params.id;
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`);
})
