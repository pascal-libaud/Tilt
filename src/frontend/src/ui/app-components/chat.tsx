import { Canal } from "../../domain/canal";

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
                    Les messages
                    {/* {canal.messages.map(m => <p>m</p>)} */}
                </div>
                <div>
                    <button>Click</button>
                </div>
            </>
        )
}

export default Chat;