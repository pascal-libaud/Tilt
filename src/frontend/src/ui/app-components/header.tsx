import { useContext } from 'react';
import { UserRepositoryContext } from '../repositories-context';
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
                <div style={{
                    marginRight: '10px',
                    padding: '4px 8px',
                    borderRadius: '5px',
                    color: '#5E2750',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                }}>
                    {userRepository.getConnected().name}
                </div>
                <div style={{ marginRight: '10px' }}>
                    <LinkButton>Se déconnecter</LinkButton>
                </div>
            </div>
        </header>
    )
}

export default Header;