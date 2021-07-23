import React from 'react';
import { Search, Logo } from '../components';
import { useHistory } from 'react-router-dom';
import { Icon } from '@material-ui/core';

export default function Home(){
	const history = useHistory()

	return(
	<React.Fragment>
		<div className="header">
			<Logo/>
		</div>
		<Search 
			onSearch={user =>{
				if(user.trim() !== ''){
					history.push(`/repositories/${user}`)
					return true
				}else{
					return 'error'
				}
			}}
		/>
		<div className="credits">
			<div>
				<b>Created by:</b>&nbsp;
				<i>Ozeias Ribeiro</i>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				Made with love
				<Icon
					style={{
						color: 'red'
					}}
				>
					favorite
				</Icon>
			</div>
		</div>
	</React.Fragment>
	);
}
