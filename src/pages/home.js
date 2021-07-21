import Search from '../components/search';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home(){
	const history = useHistory()

	return(
	<React.Fragment>
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
