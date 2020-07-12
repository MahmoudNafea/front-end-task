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
const splitArray = (arr = shuffled, n = 4) => {
    if (n < 2) {
        return arr
    }
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

    JSON.stringify({ result })
}

exports.splitArrayFunc = (req, res) => {
    splitArray.then((data) => res.send({ data })).catch((error) => res.send({ error }))
}

// const splitCards = (n) => {
//     const result = []
//     const forPlayer = Math.ceil(cards / n)
//     result.push(forPlayer)
//     // console.log(result)
// }
// console.log(splitCards(3))

// console.log(shuffled)

// const players = new Array(30);

// const chunk = 5
// for (let i = 0; i < cards.length; i += chunk) {
//     let result = []
//     result = cards.slice(i, i + chunk)
//     console.log(result)
// }


// function chunkify(a, n, balanced) {

//     if (n < 2)
//         return [a];

//     var len = a.length,
//         out = [],
//         i = 0,
//         size;

//     if (len % n === 0) {
//         size = Math.floor(len / n);
//         while (i < len) {
//             out.push(a.slice(i, i += size));
//         }
//     }

//     else if (balanced) {
//         while (i < len) {
//             size = Math.ceil((len - i) / n--);
//             out.push(a.slice(i, i += size));
//         }
//     }

//     else {

//         n--;
//         size = Math.floor(len / n);
//         if (len % size === 0)
//             size--;
//         while (i < size * n) {
//             out.push(a.slice(i, i += size));
//         }
//         out.push(a.slice(size * n));

//     }

//     return out;

// }
// console.log(chunkify(shuffled, 1))