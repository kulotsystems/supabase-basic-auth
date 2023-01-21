import { Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    const path = useLocation().pathname;
    return (
        <nav style={{ marginTop: '15px'}}>
            <Link to='/' className={path === '/' ? 'active' : ''}>Home</Link>
            <Link to='/auth' className={path === '/auth' ? 'active' : ''}>Auth</Link>
        </nav>
    );
};

export default Navbar;
