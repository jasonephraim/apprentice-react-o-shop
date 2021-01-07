import history from '../../../utils/history';
import routePaths from '../../../constants/routePaths';


const Dropdown = () => {

    const pages = [
        {
          path: 'orders',
          name: 'My Orders'
        },
        {
          path: 'adminOrders',
          name: 'Manage Orders'
       },
       {
          path: 'adminProducts',
          name: 'Manage Products'
       },
       {
          path: 'logOut',
          name: 'Log Out'
       }];

    const pagesList = pages.map(function(page, i){
        return <div
        className="dropdown-item"
        key={i}
        onClick={() => {
            history.push(routePaths[page.path]);
        }}
        >
        {page.name}
        </div>;
    })
    
    return <div className="dropdown-menu show" aria-labelledby="dropdown01">{ pagesList }</div>
}

export default Dropdown
