import React from 'react';
import { ThemeContext } from '../providers/theme';
import {
	Icon,
	IconButton
} from '@material-ui/core';

export default function Logo({maxLogo=true}){
	const [theme, setTheme] = React.useContext(ThemeContext)
	const [themeLight, setThemeLight] = React.useState(theme === 'light')

	function spaces(number=0){
		return (
		<React.Fragment>
			{Array(number).fill(null).map((obj, key)=>(
			<React.Fragment
				key={key}
			>
				&nbsp;
			</React.Fragment>
			))}
		</React.Fragment>
		);
	}

	return(
	<div className="App-logo">
		<IconButton
			color="inherit"
			onClick={()=>{
				const light = theme === 'light'
				if(light){
					setTheme('dark')
				}else{
					setTheme('light')
				}
				setThemeLight(!light)
			}}
		>
			{themeLight? 
			(<Icon
				color="inherit"
			>
				brightness_4
			</Icon>):
			(<Icon
				color="inherit"
			>
				brightness_7
			</Icon>)}
		</IconButton>
		{spaces(1)}
		{maxLogo && 
		<React.Fragment>
			Github Lister
			{spaces(7)}
		</React.Fragment>}
		<img
			alt="octocat logo"
			className="rounded"
			src="https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-github-octocat-logo.jpg"
			height="45"
		/>	
	</div>
	);
}
