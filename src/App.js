import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  state = {
    article : [
      {name: "Ventilateur: ", prix: "3€"},
      {name: "Manteau: ", prix: "10€"},
    ],
  };
  render() {

    

    if (this.state.article.length <= 2) {
      return (
        <div>
          <h1>Liste du magasin</h1>
          <div>
            <span>{this.state.article[0].name}</span>
            <span>{this.state.article[0].prix}</span>
          </div>
          <div>
            <span>{this.state.article[1].name}</span>
            <span>{this.state.article[1].prix}</span>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Il y a plus rien</h1>
        </div>
      )
    }
  }
}

export default App

