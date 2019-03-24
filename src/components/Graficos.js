import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Graficos extends Component {

	render() {
		return (
			<div>
				<ResponsiveContainer width="100%" height={600}>
					<LineChart
						data={this.props.resultados}
						margin={{
						top: 5, right: 30, left: 20, bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="tentativa" />
						<YAxis domain={[0, this.props.resultados.length]}/>
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="vitoriasTrocando" stroke="#8884d8" name="Vitórias sempre trocando" />
						<Line type="monotone" dataKey="vitoriasNaoTrocando" stroke="#82ca9d" name="Vitórias nunca trocando" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}

export default Graficos;