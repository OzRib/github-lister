import React from 'react';
import { ThemeContext } from '../providers/theme';
import {
	Button,
	Modal,
	Fade,
	Backdrop,
	Paper,
	Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { RepositorydataTable } from './';
import CloseIcon from '@material-ui/icons/Close';
import themes from '../themes';

function RepositoriesModal({
	repository,
	show,
	classes,
	...props
}){
	const [theme] = React.useContext(ThemeContext)
	const {
		name,
		full_name,
		language,
		html_url,
		default_branch,
		created_at,
		updated_at
	} = repository

	function toLocaleDate(date){
		return new Date(date).toLocaleDateString()
	}

	const formData = {
		'Nome completo': full_name,
		'Linguagem': language,
		'URL': <a href={html_url}>{html_url}</a>,
		'Branch padrão': default_branch,
		'Data de criação': toLocaleDate(created_at),
		'Última atualização': toLocaleDate(updated_at)
	} 

	return(
	<Modal
		{...props}
		open={show}
		className="modal"
		BackdropComponent={Backdrop}
		BackdropProps={{
			timeout: 500
		}}
	>
		<Fade in={show}>
			<Paper 
				className={"modal-container "+classes[theme]}
			>
				<div className="modal-header">
					<Typography 
						variant="h6"
						className="modal-title"
					>
						{name}
					</Typography>
					<Button 
						variant="contained" 
						color="secondary"
						onClick={()=>{
							if(props.onClose)
								props.onClose()
						}}
						style={{
							padding: '0'
						}}
					>
						<CloseIcon/>
					</Button>
				</div>
				<div className="modal-body">
					<RepositorydataTable
						data={formData}
					/>
				</div>
			</Paper>
		</Fade>
	</Modal>
	);
}

export default withStyles(themes)(RepositoriesModal);
