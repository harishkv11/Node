import express from 'express'
const app = express();
const PORT = 3000;

app.get('/', (req,res) => {
    res.send('This is the home page')
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})