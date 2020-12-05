
import './App.css';
import M from 'materialize-css';
import {Link , Route, BrowserRouter} from 'react-router-dom';
import ShowModel from './components/ShowModel';

import React, { Component } from 'react';
import ImageCard from './components/ImageCard';

class App extends Component {
  componentDidMount(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
}
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path = '/model' component = {ShowModel}></Route>
          <Link to = "/model"  className="btn modal-trigger"> Add New Item</Link>
          <ImageCard />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
