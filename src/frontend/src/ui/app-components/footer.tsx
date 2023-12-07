import { currentDateTime } from './../../helper/datetime';

function Footer() {
    const dt = currentDateTime();

    return (
        <footer className="App-footer">
            <p>{dt}</p>
        </footer>
    )
}

export default Footer;