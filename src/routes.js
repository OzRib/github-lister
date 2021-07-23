import { Home, RepositoriesPage } from './pages';
import { 
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

export default function Routes(){
	return(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/repositories/:user" component={RepositoriesPage}/>
		</Switch>
	</BrowserRouter>
	);
}
