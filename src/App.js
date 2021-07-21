import React from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Routes from './routes';
import themes from './themes';

function App({classes}) {
	return (
	<div className={"App "+classes.dark}>
		<Routes/>
	</div>
	);
}

export default withStyles(themes)(App);
