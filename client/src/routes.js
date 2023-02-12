import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import DevicePage from './pages/AviaPage'
import {
    ADMIN_ROUTE,
    BUY_ROUTE,
    CREATE_AVIA_ROUTE,
    CREATE_COUNTRY_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import CreateCountry from "./AdminPanel/CreateCountry";
import CreateAvia from "./AdminPanel/CreateAvia";
import Main from "./pages/Main";
import Buy from "./pages/Buy";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        element: <Main/>
    },
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BUY_ROUTE + '/:id',
        element: <Buy/>
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    },
    {
        path: CREATE_COUNTRY_ROUTE,
        element: <CreateCountry/>
    },
    {
        path: CREATE_AVIA_ROUTE,
        element: <CreateAvia/>
    },
    {
        path: CREATE_AVIA_ROUTE,
        element: <CreateAvia/>
    },
]