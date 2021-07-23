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

	const width = window.innerWidth
	const [maxLogo, setMaxLogo] = React.useState(width >= 440)

	async function searchUser(name){
		const filteredName = name.trim()

		const user = await axios.get(`https://api.github.com/users/${encodeURIComponent(filteredName)}`)
		setUserdata(user.data)

		const repos = await axios.get(`https://api.github.com/users/${filteredName}/repos`)
		setRepositories(repos.data)
	}

	React.useEffect(()=>{
		window.addEventListener('resize', event =>{
			const width = event.target.innerWidth

			setMaxLogo(width >= 440)
		})
		searchUser(username)
	},[username])

	return(
	<React.Fragment>
		<Grid 
			container
			direction="row"
			justifyContent="space-between"
			className="header"
		>
			<Grid item>
				<TurnBack
					username={username}
				/>	
			</Grid>
			<Grid item>
				<Logo
					maxLogo={maxLogo}
				/>
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
