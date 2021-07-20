import Search from '../components/search';
import { useHistory } from 'react-router-dom';

export default function Home(){
	const history = useHistory()

	return(
	<Search 
		onSearch={user =>{
			if(user.trim() !== ''){
				history.push(`/search/${user}`)
				return true
			}else{
				return 'error'
			}
		}}
	/>
	);
}
