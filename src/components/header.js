import React from 'react';

export default function Header(){
	return(
	<header className="App-header">
		Github Lister
		{Array(7).fill(null).map((obj, key)=>(
			<React.Fragment
				key={key}
			>
				&nbsp;
			</React.Fragment>))}
		<img
			alt="octocat logo"
			className="rounded"
			src="https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-github-octocat-logo.jpg"
			height="45"
		/>	
	</header>
	);
}
