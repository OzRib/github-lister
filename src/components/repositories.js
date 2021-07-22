import React from 'react';
import { Repository } from './';

export default function Repositories({repositories}){
	return(
	<React.Fragment>
		<div className="scrollable repositories">
			{repositories.map((repository, key)=>(
			<Repository 
				repository={repository} 
				key={key}
				onDetails={repository =>{
					setRepository(repository)
					setShow(true)
				}}
			/>
			))}
		</div>
	</React.Fragment>
	);
}
