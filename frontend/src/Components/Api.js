export const getCardsApi = (number) => {
    return fetch(`http://localhost:5000/cards?number=${number}`, {
        method: "Get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json()).catch((err) => console.log(err))
}