import Home from '../pages/Home';
import AddTenis from '../pages/AddTenis';
import TenisDetails from '../pages/TenisDetails';
import Favorites from '../pages/Favorites';
import RegisterUser from '../pages/RegisterUser';
import UsersList from '../pages/UsersList';

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/add-tenis', component: AddTenis },
  { path: '/tenis/:id', component: TenisDetails },
  { path: '/favorites', component: Favorites },
  { path: '/register-user', component: RegisterUser },
  { path: '/users', component: UsersList },
];

export default routes;