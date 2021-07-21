const formStyles = {
	dark: {
		'& .MuiFormLabel-root': {
			color: 'white'
		}
	}
}

const inputStyles = {
	dark:{
		'& .MuiFilledInput-underline:before': {
			borderBottomColor: 'green'
		},
		'& .MuiFilledInput-underline:after': {
			borderBottomColor: 'darkgreen'
		},
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

const themes = {
	dark: {
		backgroundColor: '#282c34',
		color: 'white',
		...formStyles.dark,
		...inputStyles.dark,
		...buttonStyles.dark,
		...tableStyles.dark
	}
}

export default themes;
