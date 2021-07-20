import { BrowserRouter, Route } from 'react-router-dom';
import { Home, SearchPage } from './pages';

export default function Routes(){
	return(
	<BrowserRouter>
		<Route exact path="/" component={Home}/>
		<Route exact path="/" component={SearchPage}/>
	</BrowserRouter>
	);
}
