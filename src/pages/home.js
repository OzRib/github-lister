import Search from '../components/search';
import { useHistory } from 'react-router-dom';

export default function Home(){
	const history = useHistory()

	return(
	<Search 
		onSearch={user =>{
			history.push(`/search/${user}`)
		}}
	/>
	);
}
