import { useState } from "react";
import { Canals } from "./canals";
import { Chat } from "./chat";
import { Users } from "./users";
import { Canal } from "../../domain/canal";

export function Main() {

    const [canal, setCanal] = useState<Canal | null>(null)

    return (
        <>
            <Canals />
            {canal ? <Chat canal={canal} /> : <p>Veuillez sélectionner une conversation</p>}
            <Users />
        </>
    )
}