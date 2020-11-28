import Header from '../templates/Header.js';
import Home from '../pages/Home.js';
import Characters from '../pages/Characters.js';
import Error404 from '../pages/Error404.js';
import getHash from '../utils/getHash.js';
import resolveRouter from '../utils/resolveRoute.js';

const routes = {
    '/': Home(),
    '/:id': Characters(),
    '/contact': 'Contact'
};

const router = async () => {
    const header = null || document.getElementById('header');   
    header.innerHTML = await Header();
    const content = null || document.getElementById('content');
    let hash = getHash();
    let route = await resolveRouter(hash);
    let render = routes[route] ? routes[route] : Error404();
    content.innerHTML = await render;
};

export default router;