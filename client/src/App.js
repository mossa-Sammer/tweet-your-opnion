import React from 'react';
// import a from './download.jpeg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	componentDidMount() {
		console.log('hi');
		axios.get('/hey').then(d => {
			console.log(1);
		});
	}
	render() {
		const src = process.env.PUBLIC_URL + './download.jpeg';
		return (
			<div className="App">
				<p>hello world</p>
				<img src={src}></img>
			</div>
		);
	}
}

export default App;
