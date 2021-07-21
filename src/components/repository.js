import {
	ListItem,
	Card,
	CardContent,
	CardActions,
	CardActionArea,
	Button,
	Typography
} from '@material-ui/core';

export default function Repository({repository}){
	const {
		full_name,
		description,
		html_url
	} = repository

	return(
	<ListItem>
		<Card
			style={{
				width: '100%'
			}}
		>
			<CardActionArea>
				<CardContent>
					<Typography variant="h5" component="h2">
						{full_name}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{description === null?
							'Sem descrição':
							description
						}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="contained"
						color="primary"
					>
						Detalhes
					</Button>
					<Button
						variant="contained"
						color="primary"
						href={html_url}
					>
						Ver repositório
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	</ListItem>
	)
}
