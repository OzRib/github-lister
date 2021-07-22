import React from 'react';

export default function Logo(){
	const width = window.innerWidth

	const [maxLogo, setMaxLogo] = React.useState(width >= 440)

	window.addEventListener('resize', event =>{
		const width = event.target.innerWidth

		setMaxLogo(width >= 440)
	})

	return(
	<div className="App-logo">
		{maxLogo && 'Github Lister'}
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
	</div>
	);
}
