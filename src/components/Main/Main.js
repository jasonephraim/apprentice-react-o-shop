import React from "react";
import { Route, Switch } from 'react-router';

import './Main.scss';
import AdminOrders from '../../pages/AdminOrders';
import AdminProducts from '../../pages/AdminProducts';
import CheckOut from '../../pages/CheckOut';
import Home from '../../pages/Home';
import Orders from '../../pages/Orders';
import OrderSuccess from '../../pages/OrderSuccess';
import Products from '../../pages/Products';
import ShoppingCart from '../../pages/ShoppingCart';

function Main() {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/checkout" component={CheckOut}/>
                <Route exact path="/admin-products" component={AdminProducts}/>
                <Route exact path="/admin-orders" component={AdminOrders}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/orders" component={Orders}/>
                <Route exact path="/order-success" component={OrderSuccess}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/shopping-cart" component={ShoppingCart}/>
            </Switch>
        </div>
    );
}

export default Main;
