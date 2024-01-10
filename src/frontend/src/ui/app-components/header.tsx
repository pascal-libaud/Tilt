import { useContext } from 'react';
import { UserRepositoryContext } from '../repositories-context';
import MiniCard from '../ui-components/mini-card';
import LinkButton from '../ui-components/link-button';
import logo from './../../logo.svg';

function Header() {
    const userRepository = useContext(UserRepositoryContext)
    return (
        <header className="App-header">
            <div>
                <img src={logo} className="App-logo" alt="logo" width={75} height={75} />
                TILT
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <MiniCard content={userRepository.getConnected().name} />
                <div style={{ marginRight: '10px' }}>
                    <LinkButton>Se déconnecter</LinkButton>
                </div>
            </div>
        </header>
    )
}

export default Header;