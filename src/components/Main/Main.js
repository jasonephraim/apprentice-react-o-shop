import React from "react";
import { Route, Switch } from 'react-router';

import './Main.scss';
import routePaths from '../../constants/routePaths';
import adminOrders from '../../pages/AdminOrders';
import adminProducts from '../../pages/AdminProducts';
import checkOut from '../../pages/CheckOut';
import orders from '../../pages/Orders';
import products from '../../pages/Products';
import shoppingCart from '../../pages/ShoppingCart';

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path={routePaths.home} component={products}/>
                <Route exact path={routePaths.adminOrders} component={adminOrders}/>
                <Route exact path={routePaths.adminProducts} component={adminProducts}/>
                <Route exact path={routePaths.checkout} component={checkOut}/>
                <Route exact path={routePaths.orders} component={orders}/>
                <Route exact path={routePaths.products} component={products}/>
                <Route exact path={routePaths.shoppingCart} component={shoppingCart}/>
            </Switch>
        </div>
    );
}

export default Main;
