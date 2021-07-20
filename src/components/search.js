import React from 'react';
import { Button, TextField } from '@material-ui/core';

export default function Search({onSearch}){
	const [user, setUser] = React.useState("")

	function handleChange(event){
		const target = event.target
		const value = target.value

		setUser(value)
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
			/>
		</div>
		<Button variant="primary" onClick={() =>{
			onSearch(user)
		}}>
			Pesquisar
		</Button>	
	</React.Fragment>
	);
}
