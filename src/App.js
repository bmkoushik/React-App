import React, { Component } from 'react';
import './App.css';
import Films from './films';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      films: []
    };
  }
  componentDidMount() {
    fetch("http://www.snagfilms.com/apis/films.json?limit=10")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            films: result.films.film
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, films } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <div className="App-Tile">
          <h2>Welcome to video play list!</h2>
          <Films films={films}></Films>
      </div>
      );
    }
  }
}

export default App;
