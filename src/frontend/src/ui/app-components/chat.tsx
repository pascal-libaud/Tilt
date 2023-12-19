import { Canal } from "../../domain/canal";

type ChatProps = {
    canal: Canal | null
}

function Chat({ canal }: ChatProps) {

    if (canal == null)
        return (<p>Veuillez sélectionner une conversation</p>)
    else
        return (
            <div>
                <p>{canal.name}</p>
                CHAT
            </div>
        )
}

export default Chat;