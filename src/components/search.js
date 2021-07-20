import React from 'react';
import { Button, FormControl } from 'react-bootstrap';

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
			<FormControl
				id="search-input"
				name="search-input"
				type="text"
				placeholder="Digite aqui o nome do usuário"
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
