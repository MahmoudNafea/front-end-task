const express = require("express");

const app = express();
app.use(express.json());

const suits = ["S", "H", "D", "C"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cards = [];

for (let i = 0; i < values.length; i++) {
    for (let x = 0; x < suits.length; x++) {
        const card = { value: values[i], suit: suits[x] }
        cards.push(card)
        // console.log(cards.length)
    }
};
const shuffled = cards.sort(() => Math.random() - 0.5)
// console.log(shuffled)

// const players = new Array(30);

// const chunk = 5
// for (let i = 0; i < cards.length; i += chunk) {
//     let result = []
//     result = cards.slice(i, i + chunk)
//     console.log(result)
// }

function splitArray(arr, players) {
    let chunks = [], i = 0, n = arr.length
    while (i < n) {
        chunks.push(arr.slice(i, i += players))
    }
    return chunks
}
console.log(splitArray(shuffled, 10))

// const splitCards = (n) => {
//     const result = []
//     const forPlayer = Math.ceil(cards / n)
//     result.push(forPlayer)
//     // console.log(result)
// }
// console.log(splitCards(3))

app.get('/cards', (req, res) => {
    res.send("cards")
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});