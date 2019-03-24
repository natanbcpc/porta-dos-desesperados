import React, { Component } from 'react';
import Graficos from './Graficos.js';

class Simulador extends Component {

	constructor(props) {
		super(props);
		this.state = {qtdSimulacoes: 100};
	
		this.alterarQtdSimulacoes = this.alterarQtdSimulacoes.bind(this);
		this.simular = this.simular.bind(this);
	}

	alterarQtdSimulacoes(event) {
		this.setState({qtdSimulacoes: event.target.value});
	}

	simular() {
		let simulacoesSempreTroca = [], simulacoesNuncaTroca = [], resultados = [];
		let reducer = (valorAcumulado, valorAtual) => valorAtual.ganhou ? ++valorAcumulado : valorAcumulado;
		for (let i = 0; i < this.state.qtdSimulacoes; i++) {
			let portas = [
				{ premiada : true, aberta : false },
				{ premiada : false, aberta : false },
				{ premiada : false, aberta : false }
			];

			let portaEscolhida = Math.floor(Math.random() * 3);

			if (!portas[0].premiada && portaEscolhida !== 0) {
				portas[0].aberta = true;
			} else if (!portas[1].premiada && portaEscolhida !== 1) {
				portas[1].aberta = true;
			} else if (!portas[2].premiada && portaEscolhida !== 2) {
				portas[2].aberta = true;
			}

			simulacoesSempreTroca.push({ ganhou : !portas[portaEscolhida].premiada });
			simulacoesNuncaTroca.push({ ganhou : portas[portaEscolhida].premiada });
			resultados.push({
				tentativa : i + 1,
				vitoriasTrocando : simulacoesSempreTroca.reduce(reducer, 0),
				vitoriasNaoTrocando : simulacoesNuncaTroca.reduce(reducer, 0)
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