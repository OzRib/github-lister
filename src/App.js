import React from 'react';
import './App.css';
import { ThemeContext } from './providers/theme';
import { withStyles } from '@material-ui/core/styles';
import Routes from './routes';
import themes from './themes';

function App({classes}) {
	const [theme] = React.useContext(ThemeContext);

	return (
	<div className={"App "+classes[theme]+" "+classes.root}>
		<Routes/>
	</div>
	);
}

export default withStyles(themes)(App);
