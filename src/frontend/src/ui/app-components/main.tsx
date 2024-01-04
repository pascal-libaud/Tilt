import { useContext, useState } from "react";
import Canals from "./canals";
import Chat from "./chat";
import { Users } from "./users";
import { Canal } from "../../domain/canal";

import 'bootstrap/dist/css/bootstrap.min.css';
import { RepositoriesContext } from "../repositories-context";

function Main() {
    const repositories = useContext(RepositoriesContext)

    const handleCanalChanged = (name: string) => {
        const c = repositories.canalRepository.getCanals().find(x => x.name == name)
        if (c != null)
            repositories.canalRepository.selectCanal(c)
    }

    return (
        <div className="App-main">
            <div className="canals">
                <Canals onCanalChange={handleCanalChanged} />
            </div>
            <div className="chat">
                <Chat canal={repositories.canalRepository.getSelectedCanal()} />
            </div>
            <div className="users">
                <Users canal={repositories.canalRepository.getSelectedCanal()} />
            </div>
        </div>
    )
}

export default Main;