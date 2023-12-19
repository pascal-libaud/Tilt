import LinkButton from '../ui-components/link-button';
import logo from './../../logo.svg';

function Header() {
    return (
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" width={75} height={75} />
                TILT
            </div>
            <LinkButton style={{ marginRight: '10px' }}>Se déconnecter</LinkButton>
        </header>
    )
}

export default Header;