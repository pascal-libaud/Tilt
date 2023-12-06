import { Canal } from "../../domain/canal";

type ChatProps = {
    canal: Canal
}

export function Chat({ canal }: ChatProps) {

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}>
            CHAT
        </div>
    )
}