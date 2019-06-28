import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';
import ClickedSmurf from './components/ClickedSmurf';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  };

  componentDidUpdate(){
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      this.setState({
        smurfs: res.data
      });
    });
  }


  deleteSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route exact path='/' render={(props) => (<Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>)} />
        <Route path='/form' component={SmurfForm} />
        <Route path="/smurfs/:id" render={(props) => { (<ClickedSmurf {...props} smurfs={this.state.smurfs}/>)}} />
      </div>
    );
  }
}

export default App;
