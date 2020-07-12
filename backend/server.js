const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

// const { splitArrayFunc } = require('./playground')

const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cards = [];

for (let i = 0; i < values.length; i++) {
    for (let x = 0; x < suits.length; x++) {
        const card = { value: values[i], suit: suits[x] }
        cards.push(card)
    }
};
const shuffled = cards.sort(() => Math.random() - 0.5)

const splitArray = (arr = shuffled, n) => {
    // if (n < 2) {
    //     return arr
    // }
    let size;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.length % n === 0) {
            size = arr.length / n
            while (i < arr.length) {
                result.push(arr.slice(i, i += size))
            }
        } else {
            while (i < arr.length) {
                size = Math.floor(arr.length / n)
                result.push(arr.slice(i, i += size))
            }
        }
    }

    return JSON.stringify({ result })
}

app.get('/cards', (req, res) => {
    let n = req.query
    console.log(n)
    res.send(splitArray(n))
})
// app.get('/cards', splitArray)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});