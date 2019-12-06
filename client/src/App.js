import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { PlayerList } from './components/PlayerList'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  fetchPlayers() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({ players: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

render() {
  return (
    <div>
      <h1>Women's World Cup Player Search Interest</h1>
      <PlayerList players={this.state.players} />
    </div>
  );
}
}

export default App;
