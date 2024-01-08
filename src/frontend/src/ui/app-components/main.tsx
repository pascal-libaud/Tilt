import { useContext } from "react";
import Channels from "./channels";
import Chat from "./chat";
import { Users } from "./users";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ChannelRepositoryContext } from "../repositories-context";

function Main() {
    const channelRepository = useContext(ChannelRepositoryContext)

    const handleChannelChanged = (name: string) => {
        const c = channelRepository.getChannels().find(x => x.name == name)
        if (c != null)
            channelRepository.selectChannel(c)
    }

    return (
        <div className="App-main">
            <div className="channels">
                <Channels onChannelChange={handleChannelChanged} />
            </div>
            <div className="chat">
                <Chat channel={channelRepository.getSelectedChannel()} />
            </div>
            <div className="users">
                <Users channel={channelRepository.getSelectedChannel()} />
            </div>
        </div>
    )
}

export default Main;