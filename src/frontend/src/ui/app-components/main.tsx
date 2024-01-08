import { useContext } from "react";
import Channels from "./channels";
import Chat from "./chat";
import { Users } from "./users";

import 'bootstrap/dist/css/bootstrap.min.css';
import { RepositoriesContext } from "../repositories-context";

function Main() {
    const repositories = useContext(RepositoriesContext)

    const handleChannelChanged = (name: string) => {
        const c = repositories.channelRepository.getChannels().find(x => x.name == name)
        if (c != null)
            repositories.channelRepository.selectChannel(c)
    }

    return (
        <div className="App-main">
            <div className="channels">
                <Channels onChannelChange={handleChannelChanged} />
            </div>
            <div className="chat">
                <Chat channel={repositories.channelRepository.getSelectedChannel()} />
            </div>
            <div className="users">
                <Users channel={repositories.channelRepository.getSelectedChannel()} />
            </div>
        </div>
    )
}

export default Main;