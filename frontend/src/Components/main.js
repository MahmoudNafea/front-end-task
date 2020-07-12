import React, { useState, useEffect } from 'react';
import History from './History';
import * as QueryString from "query-string"
import { Jumbotron } from 'react-bootstrap';

const Main = (props) => {

    const [cards, setCards] = useState([])
    const [playersNumber, setPlayersNumber] = useState(0);
    const [number, setNumber] = useState(0);
    const [error, setError] = useState(false)


    const getCardsApi = (number) => {
        return fetch(`http://localhost:5000/cards?number=${number}`, {
            method: "Get",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json()).catch((err) => console.log(err))
    }
    const getCards = (number) => (
        getCardsApi(number).then((data) => {
            if (data.error) {
                setError(true)
            }
            setCards(data.result)
        }).catch((err) => console.log(err))
    )

    useEffect(() => {
        const params = QueryString.parse(props.location.search);
        const number = params.numb
        setNumber(number)
    }, [props.location.search])

    const submitHandler = (e, number) => {
        e.preventDefault()
        if (playersNumber < 1) {
            return setError(true)
        } else {
            setError(false)
            setNumber(playersNumber)
            setPlayersNumber('')
            History.push('/?number=' + playersNumber)
            getCards(number)
        }
    }
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : "none" }}>
            Value is invalid
        </div>
    );
    return (
        <div >
            <Jumbotron>
                <h1>Welcome to Cards game!</h1>
                <p> Are you excited?</p>
            </Jumbotron>
            <div className=" container">
                <div className="col-md-6 offset-md-4">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label> Players</label>
                            <input type="number" className="form-control" placeholder="Number of Players" required
                                onChange={(e) => setPlayersNumber(e.target.value)} value={playersNumber} />
                        </div>
                        <button type="submit" className="btn btn-outline-primary" >Start</button>
                    </form>
                    {showError()}
                    {JSON.stringify(cards)}
                    {number}
                </div>
            </div>
        </div>
    )
};

export default Main;