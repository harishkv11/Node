const mongoose = require("mongoose");
const express = require("express");
const uuid = require('uuid-random')

const bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/bookdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const bookSchema = new Schema({
  id: String,
  name: String,
  price: Number,
});

const Book = mongoose.model("Book", bookSchema);

app.post("/books/save", async (req, res) => {
  try {
    const { name, price } = req.body;
    const id = uuid();
    const newBook = new Book({ id, name, price });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (error) {
    console.log("Error while saving the book : ", error);
  }
});

app.get("/books/all", async (req,res) => {
  try {
    const books = await Book.find({}, {id: true, name: true, price: true});
    res.send(books);
  } catch (error) {
    console.log('Error while getting books : ', error);
  }
})

app.get("/books/get/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await Book.find({id : bookId});
    res.send(book);
  } catch(error) {
    console.log('Error : ', error);
  }
})

app.delete("/books/remove/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const deleteBook = await Book.deleteOne({id: bookId});
    res.send(`Book with id : ${bookId} deleted`);
  } catch (error) {
    console.log('Error : ', error);
  }
})

app.put("/books/update/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = req.body;
    const savedBook = await Book.updateOne({id: bookId}, {$set: updatedBook});
    res.send(`Book with id : ${bookId} updated`);
  } catch (error) {
    console.log('Error : ', error);
  }
})

app.listen(PORT, () => {
  console.log("Server running!");
});
