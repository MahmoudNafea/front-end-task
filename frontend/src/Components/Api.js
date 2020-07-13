import { URL } from '../config';

export const getCardsApi = (number) => {
    return fetch(`${URL}/cards?number=${number}`, {
        method: "Get",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json()).catch((err) => console.log(err))
}