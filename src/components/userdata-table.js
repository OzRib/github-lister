import {
	Table,
	TableContainer,
	TableBody,
	TableRow,
	TableCell
} from '@material-ui/core';

export default function UserdataTable({data}){
	return(
	<div
		style={{
			overflow: 'scroll',
			overflowX: 'hidden',
			overflowY: 'auto',
			height: '24.1rem'
		}}
	>
		<TableContainer>
			<Table>
				<TableBody>
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
				</TableBody>
			</Table>
		</TableContainer>
	</div>
	);
}
