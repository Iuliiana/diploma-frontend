import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Catalog from "../pages/Catalog";
import CatalogDetail from "../pages/CatalogDetail";
import Cart from "../pages/Cart";
import {Layout} from "../components/layouts/Layout";
import {Notfound} from "../pages/Notfound";
import {isObject} from "../helper";
import {BannerLayout} from "../components/layouts/BannerLayout";
import {Success} from "../pages/Success";

export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                element: <BannerLayout/>,
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
                    {
                        id: 8,
                        pid: 0,
                        isActive: true,
                        isNavMenu: false,
                        title: 'Успешный заказ!',
                        path: '/order/success.html',
                        sortBy: {},
                        element: <Success/>,
                    },
                ]
            }
        ]
    },
];

const routesNavArray = [];

function getRoutesNav(arr) {
    if (Array.isArray(arr) && arr !== []) {
        arr.forEach(value => {
            if (isObject(value)) {
                (Object.keys(value).includes('isNavMenu')) && routesNavArray.push(value);
            }
            getRoutesNav(value.children);
        })
    }
    return routesNavArray;
}

export const routesNav = getRoutesNav(routes);
