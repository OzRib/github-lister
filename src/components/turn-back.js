import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function TurnBack({username}){
	const history = useHistory()

	return(
	<div className="turn-back">
		<IconButton 
			color="inherit"
			edge="start"
			onClick={()=>{
				history.goBack()
			}}
		>
			<Icon
				style={{
					fontSize: 'calc(16px + 2vmin)',
					fontWeight: 'bold'
				}}
			>
				arrow_back
			</Icon>
		</IconButton>
		{Array(5).fill(null).map((obj, key)=>(
			<React.Fragment key={key}>
				&nbsp;
			</React.Fragment>
		))}
		<span
			style={{
				fontSize: 'calc(12px + 2vmin)',
				fontWeight: 'bold'
			}}
		>
				{username}
		</span>
	</div>
	);
}
