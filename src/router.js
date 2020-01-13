
import Register from './components/register';
import HomePage from './components/homepage';
import UserList from './components/userList';
import VueRouter from 'vue-router';

const routes = [
  { name: 'home', path: '/', component: HomePage },
  { name: 'register', path: '/register', component: Register },
  { name: 'list', path: '/list', component: UserList }
]

export const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history'
})
