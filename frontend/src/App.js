import React from 'react';
import Main from './Components/Main';
import { Router, Route } from 'react-router-dom';
import History from './Components/History';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div >
      <Router history={History}>
        <Route path="/" exact component={Main} />
      </Router>
    </div>
  );
}

export default App;
