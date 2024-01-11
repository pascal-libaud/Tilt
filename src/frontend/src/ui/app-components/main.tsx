import { useContext } from "react";
import Channels from "./channels";
import Chat from "./chat";
import { Users } from "./users";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ChannelRepositoryContext, UserRepositoryContext } from "../repositories-context";
import { Channel } from "../../domain/channel";

function Main() {
    const channelRepository = useContext(ChannelRepositoryContext)
    const userRepository = useContext(UserRepositoryContext)

    const handleChannelChanged = (channel: Channel) => {
        channelRepository.selectChannel(channel)
    }

    return (
        <div className="App-main">
            <div className="channels">
                <Channels onChannelChange={handleChannelChanged} />
            </div>
            <div className="chat">
                <Chat
                    channelRepository={channelRepository}
                    channel={channelRepository.getSelectedChannel()}
                    user={userRepository.getConnected()}
                />
            </div>
            <div className="users">
                <Users userRepository={userRepository} channel={channelRepository.getSelectedChannel()} />
            </div>
        </div>
    )
}

export default Main;