import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { 
	Logo, 
	TurnBack,
	User,
	Repositories
} from '../components';

export default function RepositoriesPage({match:{params}}){
	const username = params.user
	const [userdata, setUserdata] = React.useState({})
	const [repositories, setRepositories] = React.useState([])

	async function searchUser(name){
		const user = await axios.get(`https://api.github.com/users/${encodeURIComponent(name)}`)
		setUserdata(user.data)

		const repos = await axios.get(`https://api.github.com/users/${name}/repos`)
		setRepositories(repos.data)
	}

	React.useEffect(()=>{
		searchUser(username)
	},[username])

	return(
	<React.Fragment>
		<Grid 
			container
			direction="row"
			justifyContent="space-between"
		>
			<Grid item>
				<TurnBack
					username={username}
				/>	
			</Grid>
			<Grid item>
				<Logo/>
			</Grid>
		</Grid>
		<Grid container spacing={0}>
			<Grid 
				item 
				lg={4}
				md={5}
				container
				direction="column"
				alignItems="center"
			>
				<User userdata={userdata}/>
			</Grid>
			<Grid
				item
				lg={8}
				md={7}
				container
				direction="column"
				alignItems="center"
			>
				<Repositories repositories={repositories}/>
			</Grid>
		</Grid>
	</React.Fragment>
	);
}
