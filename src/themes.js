const formStyles = {
	dark: {
		'& .MuiFormLabel-root': {
			color: 'white'
		}
	}
}

const inputStyles = {
	root: {
		'& .MuiFilledInput-underline:before': {
			borderBottomColor: 'green'
		},
		'& .MuiFilledInput-underline:after': {
			borderBottomColor: 'darkgreen'
		}
	},
	dark:{
		'& .MuiFilledInput-root': {
			color: 'white',
			backgroundColor: '#FFFFFF28'
		}
	}
}

const buttonStyles = {
	dark: {
		'& .MuiIconButton-root:hover': {
			backgroundColor: '#FFFFFF3F'
		}
	}
}

const tableStyles = {
	dark: {
		'& .MuiTableCell-root': {
			color: 'white',
			borderBottomColor: '#424242'
		}
	}
}

const errorStyles = {
	'& .MuiFormLabel-root.Mui-error': {
		color: '#F44336 !important',
	},
	'& .Mui-error.MuiFilledInput-underline:after': {
		borderBottomColor: '#F44336 !important'
	}
}

const headerStyles = {
	light: {
		'& .header': {
			backgroundColor: 'cornflowerblue'
		}
	},
	dark: {
		'& .header': {
			backgroundColor: '#424048'
		}
	}
}

const paperStyles = {
	light: {
		'& .MuiPaper-root': {
			backgroundColor: '#FAFAFA'
		}
	},
	dark: {
		'& .MuiPaper-root': {
			color: 'white',
			backgroundColor: '#0d1117'
		}
	}
}

const themes = {
	root: {
		...errorStyles,
		...inputStyles.root
	},
	light: {
		...headerStyles.light,
		...paperStyles.light
	},
	dark: {
		backgroundColor: '#282c34',
		color: 'white',
		...headerStyles.dark,
		...formStyles.dark,
		...inputStyles.dark,
		...buttonStyles.dark,
		...tableStyles.dark
	}
}

export default themes;
