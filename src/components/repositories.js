import React from 'react';
import { Repository, RepositoriesModal } from './';

export default function Repositories({repositories}){
	const [show, setShow] = React.useState(false)
	const [repository, setRepository] = React.useState({})

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
		<RepositoriesModal
			show={show}
			repository={repository}
			onClose={()=>{
				setShow(false)
			}}
			className="modal"
		/>
	</React.Fragment>
	);
}
