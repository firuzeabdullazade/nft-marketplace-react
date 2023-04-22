import './Header.scss';
import logo from './logo.svg';
import user from './User.svg';

export const Header = () => {
    return (
        <header>
        <div className="navigation">
            <img src={logo} alt="nav/logo"/>
            <div className="nav-menu">
                <a href="marketplace.html" className="nav-link">Marketplace</a>
                <a href="#" className="nav-link">Rankings</a>
                <a href="#" className="nav-link">Connect a wallet</a>
                <button>
                    <img src={user} alt="user/logo"/>
                    Sign Up
                </button>
            </div>
            <button className="burger-menu">
                <img src="./assests/Burger Menu.svg" alt="burger menu"/>
            </button>
        </div>
    </header>
    )
}