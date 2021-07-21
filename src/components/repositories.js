import React from 'react';
import { Repository } from './';

export default function Repositories({repositories}){
	return(
	<div
		style={{
			overflow: 'scroll',
			overflowX: 'hidden',
			overflowY: 'auto',
			height: '36rem',
			width: '90%'
		}}
	>
		{repositories.map((repository, key)=>(
		<Repository repository={repository} key={key}/>
		))}
	</div>
	);
}
