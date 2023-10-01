import express from 'express'
const PORT = 3000;

const app = express();

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req,res) => {
    res.send('<h1>My name is Harish</h1>')
})

app.get('/contact', (req,res) => {
    res.send('<h1>This is a contact page</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})