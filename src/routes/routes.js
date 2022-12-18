import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Catalog from "../pages/catalog/Catalog";
import CatalogDetail from "../pages/catalog/CatalogDetail";
import Cart from "../pages/Cart";
import {Layout} from "../components/Layout";
import {Notfound} from "../pages/Notfound";

export const routes = [
    {
        id: 8,
        element: <Layout/>,
        children: [
            {
                id: 1,
                pid: 0,
                isActive: true,
                isNavMenu: true,
                index: true,
                title: 'Главная',
                path: '/',
                sortBy: {
                    header: 100,
                },
                element: <Home/>,
            },
            {
                id: 2,
                pid: 0,
                isActive: true,
                isNavMenu: true,
                title: 'О магазине',
                path: '/about.html',
                sortBy: {
                    header: 80,
                    footer: 100,
                },
                element: <About/>,
            },
            {
                id: 3,
                pid: 0,
                isActive: true,
                isNavMenu: true,
                title: 'Контакты',
                path: '/contacts.html',
                sortBy: {
                    header: 70,
                    footer: 80,
                },
                element: <Contacts/>,
            },
            {
                id: 4,
                pid: 0,
                isActive: true,
                isNavMenu: true,
                title: 'Каталог',
                path: '/catalog.html',
                sortBy: {
                    header: 90,
                    footer: 90,
                },
                element: <Catalog/>,
            },
            {
                id: 5,
                pid: 4,
                isActive: true,
                isNavMenu: false,
                title: 'Детальная страница товара',
                path: '/catalog/:id.html',
                sortBy: {},
                element: <CatalogDetail/>,
            },
            {
                id: 6,
                pid: 0,
                isActive: true,
                isNavMenu: false,
                title: 'Корзина',
                path: '/cart.html',
                sortBy: {},
                element: <Cart/>,
            },
            {
                id: 7,
                pid: 0,
                isActive: true,
                isNavMenu: false,
                title: '404',
                path: '*',
                sortBy: {},
                element: <Notfound/>,
            },
        ]
    },
];

export const routesNav = routes[0].children;


// {
//  id: ,
//  pid: null,
//  isActive: true,
//  title:,
//  path:,
// sortBy: [
//  {
//   type: 'header',
//   value:
//  },
//  {
//   type: 'footer',
//   value:
//  },
// ],
//  elementName:,
// },
