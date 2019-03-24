import React, { Component } from 'react';
import Simulador from './components/Simulador.js'
import './App.css';

class App extends Component {
  render() {
    return (
		<div className="App">
			<h1>Porta dos Desesperados</h1>
			<p>Este é um site que simula o resultado do jogo <b>Porta dos Desesperados</b>, também conhecido como <a href="https://pt.wikipedia.org/wiki/Problema_de_Monty_Hall"><b>Monty Hall</b></a></p>
			<Simulador />
		</div>
    );
  }
}

export default App;
