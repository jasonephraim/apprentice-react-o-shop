import history from '../../../utils/history';
import routePaths from '../../../constants/routePaths';


const NavLinks = () => {

    const links = [
        {
          path: 'home',
          name: 'Home'
        },
        {
          path: 'shoppingCart',
          name: 'Shopping Cart'
       }];

    const linksList = links.map(function(link, i){
        return <li className="nav-item"
                key={i}
                >
                <div
                className="nav-link"
                onClick={() => {
                    history.push(routePaths[link.path]);
                }}
                >
                {link.name}
                </div>
                </li>;
    })
    return linksList
}

export default NavLinks
