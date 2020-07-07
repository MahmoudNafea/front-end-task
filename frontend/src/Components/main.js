import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

const Main = () => {

    const [cards, setCards] = useState([])
    const [playersNumber, setPlayersNumber] = useState('');
    const [error, setError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if (playersNumber < 1) {
            return setError(true)
        } else {
            console.log('success')
            setError(false)
            setPlayersNumber('')
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
                </div>
            </div>
        </div>
    )
};

export default Main;