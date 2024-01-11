import { useState } from "react";
import { ChannelRepository } from "../../application/channel-repository";
import { Channel } from "../../domain/channel";
import { User } from "../../domain/user";
import Card from "../ui-components/card";

type ChatProps = {
    channelRepository: ChannelRepository
    channel: Channel | null
    user: User
}

function Chat({ channelRepository, channel, user }: ChatProps) {
    const [currentMessage, setCurrentMessage] = useState<string>('')

    const send = () => {
        if (currentMessage) {
            channelRepository.addMessage(channel!, user, currentMessage)
            setCurrentMessage('')
        }
    }

    if (channel == null)
        return (<p>Veuillez sélectionner une conversation</p>)
    else
        return (
            <>
                <p>{channel.name}</p>
                <hr />
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {
                        channel.messages.map(m => <Card header={m.author.name} content={m.content} />)
                    }
                </div>
                <div style={{ display: 'flex' }}>
                    <input
                        style={{
                            flex: '1',
                            marginRight: '10px',
                            padding: '5px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none'
                        }}
                        placeholder="Taper un message"
                        value={currentMessage}
                        onKeyDown={(event) => event.key === 'Enter' ? send() : null}
                        onChange={(evt) => setCurrentMessage(evt.target.value)} />
                    <button
                        style={{
                            padding: '5px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            backgroundColor: '#535C3C',
                            color: '#fff',
                            border: '1px solid #333',
                            outline: 'none',
                        }}
                        onClick={send}>
                        Envoyer
                    </button>
                </div>
            </>
        )
}

export default Chat;