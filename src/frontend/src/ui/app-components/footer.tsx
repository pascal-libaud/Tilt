import { currentDateTime } from '../../domain/datetime';

function Footer() {
    const dt = currentDateTime();

    return (
        <footer className="App-footer">
            <p>
                <a href="https://v0.dev/t/LOyl5Wee15h">Exemple 1</a>&nbsp;-&nbsp;
                <a href="https://v0.dev/t/M5t0gGwSxLd">Exemple 2</a>&nbsp;-&nbsp;
                <a href="https://v0.dev/t/q5v6T5h8Qio">Exemple 3</a>&nbsp;-&nbsp;
                {dt}
            </p>
            <p>Copyleft / Copyright ©</p>
        </footer>
    )
}

export default Footer;