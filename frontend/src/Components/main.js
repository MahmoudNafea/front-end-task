import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Main = () => {
    return (
        <div >
            <Jumbotron>
                <h1>Welcome to Cards game!</h1>
            </Jumbotron>
            <div className=" container">
                <div className="col-md-6 offset-md-4">
                    <form >
                        <div className="form-group">
                            <label> Players</label>
                            <input type="number" className="form-control" placeholder="Number of Players" required />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Start</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Main;