import React, { useState } from 'react';
import { getCardsApi } from './Api';
import History from './History';
import { Jumbotron } from 'react-bootstrap';

const Main = () => {
    const [cards, setCards] = useState('')
    const [playersNumber, setPlayersNumber] = useState('');
    const [number, setNumber] = useState(0);
    const [error, setError] = useState(false)

    const getCards = (number) => (
        getCardsApi(number).then((data) => {
            if (data.error) {
                setError(true)
            }
            setCards(data.result)
        }).catch((err) => console.log(err))
    )

    const submitHandler = (e, number) => {
        e.preventDefault()
        if (playersNumber < 1) {
            return setError(true)
        } else {
            setError(false)
            setNumber(playersNumber)
            setPlayersNumber('')
            History.push('/?number=' + playersNumber)
            getCards(playersNumber)
        }
    }
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : "none", marginTop: '10px' }}>
            Value is invalid
        </div>
    );
    const showCards = () => (
        <div className="alert alert-info" style={{ display: cards ? '' : "none", margin: '50px 0' }}>
            {JSON.stringify(cards)}
        </div>
    )
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
                    {showCards()}
                </div>
            </div>
        </div>
    )
};

export default Main;