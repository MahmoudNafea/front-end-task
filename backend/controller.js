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

exports.splitArray = (arr = shuffled, n) => {
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
