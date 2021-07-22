import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function Search({onSearch}){
	const [user, setUser] = React.useState("")
	const [error, setError] = React.useState(false)

	function handleChange(event){
		const target = event.target
		const value = target.value

		setUser(value)
	}

	function handleError(){
		const _3seconds = 3000

		setError(true)
		setTimeout(()=>{
			setError(false)
		}, _3seconds)
	}

	return(
	<React.Fragment>
		<div className="search">
			<TextField
				id="search-input"
				name="search"
				label="Pesquisar usuário"
				variant="filled"
				color="primary"
				value={user}
				onChange={event=>{
					handleChange(event)
				}}
				error={error}
				helperText={error ?
					"Entrada inválida":
					(<React.Fragment>
						&nbsp;
					</React.Fragment>)}
			/>
		</div>
		<Button variant="contained" color="primary" onClick={() =>{
			const response = onSearch(user)

			if(response === 'error')
				handleError()
		}}>
			Pesquisar
		</Button>	
	</React.Fragment>
	);
}
