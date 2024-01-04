import { Canal } from "../../domain/canal";
import Card from "../ui-components/card";

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
                        canal.messages.map(m => <Card header={m.author.name} content={m.content} />)
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
                        placeholder="Taper un message" />
                    <button
                        style={{
                            padding: '5px',
                            borderRadius: '5px',
                            fontSize: '16px',
                            backgroundColor: '#535C3C',
                            color: '#fff',
                            border: '1px solid #333',
                            outline: 'none',
                        }}>
                        Envoyer
                    </button>
                </div>
            </>
        )
}

export default Chat;