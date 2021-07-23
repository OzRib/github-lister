import React from 'react';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Logo } from '../components';

export default function PageNotFound(){
	const history = useHistory();

	return(
	<React.Fragment>
		<div className="header">
			<Logo/>
		</div>
		<div className="page-notfound">
			<Typography variant="h5">
				Erro 404 - Página não encontrada
			</Typography>
			<Typography variant="body2">
				Voltar para a &nbsp;
				<a
					onClick={()=>{
						history.push('/')
					}}
				>
					Página inicial
				</a>
			</Typography>
		</div>
	</React.Fragment>
	);
}
