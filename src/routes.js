import { BrowserRouter, Route } from 'react-router-dom';
import { Home, RepositoriesPage } from './pages';

export default function Routes(){
	return(
	<BrowserRouter>
		<Route exact path="/" component={Home}/>
		<Route exact path="/repositories/:user" component={RepositoriesPage}/>
	</BrowserRouter>
	);
}
