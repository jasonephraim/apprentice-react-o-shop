import routePaths from '../constants/routePaths';

const pages = [
        {
            path: routePaths.home,
            name: 'Home',
            type: 'main'
        },
        {
            path: routePaths.shoppingCart,
            name: 'Shopping Cart',
            type: 'main'
        },
        {
            path: routePaths.orders,
            name: 'My Orders',
            type: 'dropdown'
        },
        {
            path: routePaths.adminOrders,
            name: 'Manage Orders',
            type: 'dropdown'
        },
        {
            path: routePaths.adminProducts,
            name: 'Manage Products',
            type: 'dropdown'
        },
        {
            path: routePaths.logOut,
            name: 'Log Out',
            type: 'dropdown'
        }
    ];

export default pages
