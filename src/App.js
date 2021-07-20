import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Header from './components/header';
import Routes from './routes';

const themes = {
	dark: {
		backgroundColor: '#282c34',
		color: 'white',
		'& .MuiFormLabel-root': {
			color: 'white'
		},
		'& .MuiFilledInput-underline:before': {
			borderBottomColor:'green'
		},
		'& .MuiFilledInput-underline:hover:before': {
			borderBottomColor: 'darkgreen'
		},
		'& .MuiFilledInput-root': {
			color: 'white',
			backgroundColor: '#FFFFFF28'
		}
	}
}

function App({classes}) {
	return (
	<div className={"App "+classes.dark}>
		<Header/>
		<Routes/>
	</div>
	);
}

export default withStyles(themes)(App);
