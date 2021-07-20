import React from 'react';
import { Image } from 'react-bootstrap';

export default function Header(){
	return(
	<header className="App-header">
		<div>
			Github Lister
			{Array(7).fill(null).map((obj, key)=>(
				<React.Fragment
					key={key}
				>
					&nbsp;
				</React.Fragment>))}
			<Image
				roundedCircle
				src="https://webdesignledger.com/wp-content/uploads/2015/09/00-featured-github-octocat-logo.jpg"
				height="45"
			/>	
		</div>
	</header>
	);
}
