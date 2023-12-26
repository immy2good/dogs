import express from "express";
import axios from "axios";
import bodyParser from "body-parser"; 

const app = express()
const port = 3000

app.use(express.static('public'));




app.get('/', (req, res) => res.render('index.ejs'))


app.get('/random-dog', async (req, res) => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching dog image:', error);
        res.status(500).send('Error fetching image');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))