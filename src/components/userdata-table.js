import React from 'react';
import {
	IconButton,
	Icon,
	Collapse,
	Table,
	TableContainer,
	TableBody,
	TableRow,
	TableCell
} from '@material-ui/core';

export default function UserdataTable({data}){
	const width = window.innerWidth

	const [maxTable, setMaxTable] = React.useState(width >= 960)
	const [open, setOpen] = React.useState(false)

	window.addEventListener('resize', event =>{
		const width = event.target.innerWidth

		setMaxTable(width >= 960)
	})

	function Body(){
		return(
		<React.Fragment>
		{Object.keys(data).map((key, position)=>(
			<TableRow key={position}>
				<TableCell>
					{key}:
				</TableCell>
				<TableCell>
					{data[key] == null ? 'Sem '+key.toLowerCase(): data[key]}
				</TableCell>
			</TableRow>
		))}
		</React.Fragment>
		);
	}

	return(
	<div className="scrollable userdata-table">
		<TableContainer>
			<Table>
				<TableBody>
					{maxTable && <Body/>}
					{!maxTable &&
					<React.Fragment>
						<TableRow>
							<TableCell>
								<IconButton
									color="inherit"
									onClick={()=>{
										setOpen(!open)
									}}
								>
									{open? (<Icon>
											keyboard_arrow_down
										</Icon>): 
										(<Icon>
											keyboard_arrow_up
										</Icon>)}
								</IconButton>
								Informações
							</TableCell>
						</TableRow>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<Body/>
						</Collapse>
					</React.Fragment>}
				</TableBody>
			</Table>
		</TableContainer>
	</div>
	);
}
