import { 
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';
import { 
	Home, 
	RepositoriesPage,
	PageNotFound
} from './pages';

export default function Routes(){
	return(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/repositories/:user" component={RepositoriesPage}/>
			<Route component={PageNotFound}/>
		</Switch>
	</BrowserRouter>
	);
}
