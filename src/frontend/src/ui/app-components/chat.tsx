import { Canal } from "../../domain/canal";
import { Message } from "../../domain/message";
import Card from "../ui-components/card";


type MessProps = {
    message: Message
}

function Mess({ message }: MessProps) {
    return (
        <Card header={message.author.name} content={message.content} />
    )
}

type ChatProps = {
    canal: Canal | null
}

function Chat({ canal }: ChatProps) {

    if (canal == null)
        return (<p>Veuillez sélectionner une conversation</p>)
    else
        return (
            <>
                <p>{canal.name}</p>
                <hr />
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    {
                        canal.messages.map(m => (<Mess message={m}></Mess>))
                    }
                </div>
                <div>
                    <button disabled>Click</button>
                </div>
            </>
        )
}

export default Chat;