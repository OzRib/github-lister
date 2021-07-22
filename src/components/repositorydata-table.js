import {
	Table,
	Container,
	TableBody,
	TableRow,
	TableCell,
	Typography
} from '@material-ui/core';

export default function RepositorydataTable({data}){
	return(
	<Container
		className="scrollable"
		maxWidth="sm"
	>
		<Table
			style={{
				tableLayout: 'fixed'
			}}
		>
			<TableBody>
			{Object.keys(data).map((key, position)=>(
				<TableRow key={position}>
					<TableCell 
						className="repository-tablecell"
						style={{
							wordWrap: 'break-word'
						}}
					>
						{key}:
					</TableCell>
					<TableCell 
						className="repository-tablecell"
						style={{
							wordWrap: 'break-word'
						}}
					>
						{data[key] == null ? 'Sem '+key.toLowerCase(): data[key]}
					</TableCell>
				</TableRow>
			))}
			</TableBody>
		</Table>
	</Container>
	);
}
