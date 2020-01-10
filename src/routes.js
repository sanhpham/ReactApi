import React from 'react'
import HomePage from "./pages/HomePage/homePage";
import NotFound from './pages/NotFoundPage/notFoundPage';
import ProductList from './pages/ProducListPage/productListPage';
import ProductAction from './pages/ProductActionPage/productActionPage';
var routes = [{
    path: '/',
    exact: true,
    main: () => <HomePage />
},
{
    path: '',
    exact: false,
    main: () => <ProductList />
},

]
export default routes