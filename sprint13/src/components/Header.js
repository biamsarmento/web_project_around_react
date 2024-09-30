import logo from '../images/Vector.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
            <nav className="nav">
                <a className="nav__logo-link" href="#">
                <img
                    src={logo}
                    alt="Logo Around The US"
                    className="nav__logo"
                /> 
                </a>
            </nav>
            <div className="header__line"></div>
            </div>
        </header>
    )
}

export default Header;