import React from 'react';
import { Search, Logo } from '../components';
import { useHistory } from 'react-router-dom';

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
	</React.Fragment>
	);
}
