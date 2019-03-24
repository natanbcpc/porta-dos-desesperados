import React, { Component } from 'react';
import Graficos from './Graficos.js';

class Simulador extends Component {

	constructor(props) {
		super(props);
		this.state = { qtdSimulacoes : 100 };
	
		this.alterarQtdSimulacoes = this.alterarQtdSimulacoes.bind(this);
		this.simular = this.simular.bind(this);
	}

	alterarQtdSimulacoes(event) {
		this.setState({ qtdSimulacoes : event.target.value });
	}

	simular() {
		let resultados = [];
		let vitoriasTrocando = 0, vitoriasNaoTrocando = 0;
		let portas = [ true, false, false ];
		for (let i = 0; i < this.state.qtdSimulacoes; i++) {
			let portaEscolhida = Math.floor(Math.random() * 3);

			if(portas[portaEscolhida]) {
				vitoriasNaoTrocando++;
			} else {
				vitoriasTrocando++;
			}

			resultados.push({
				tentativa : i + 1,
				vitoriasTrocando,
				vitoriasNaoTrocando
			});
		}

		this.setState({ resultados });
	}
  
	render() {
		let graficos = this.state.resultados ?
				<Graficos resultados={this.state.resultados} />
			:
				'';

		return (
			<div className="Simulador">
				<p>Escolha uma quantidade de simulações</p>
				<input type="number" id="qtdSimulacoes" value={this.state.qtdSimulacoes} onChange={this.alterarQtdSimulacoes}></input>
				<button onClick={this.simular}>Simular</button>

				{graficos}
			</div>
		);
	}
}

export default Simulador;