import React from 'react';

export default function Logo({maxLogo=true}){
	return(
	<div className="App-logo">
		{maxLogo && 
		<React.Fragment>
			Github Lister
			{Array(7).fill(null).map((obj, key)=>(
			<React.Fragment
				key={key}
			>
				&nbsp;
			</React.Fragment>))}
		</React.Fragment>}
		<img
			alt="octocat logo"
			className="rounded"
			src="https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-github-octocat-logo.jpg"
			height="45"
		/>	
	</div>
	);
}
