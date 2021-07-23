import React from 'react';
import { Avatar} from '@material-ui/core';
import { UserdataTable } from './';

export default function User({userdata}){
	const {
		avatar_url,
		login, 
		name, 
		company,
		location,
		bio,
		public_repos
	} = userdata

	const formData = {
		'Nome de usuário': login,
		'Empresa': company,
		'Localização': location,
		'Biografia': bio,
		'Repositórios públicos': public_repos
	}

	return(
	<React.Fragment>
		<Avatar src={avatar_url} style={{
			height: '8rem',
			width: '8rem',
			margin: '4%'
		}}/>
		{name}
		<UserdataTable data={formData}/>
	</React.Fragment>
	);
}
