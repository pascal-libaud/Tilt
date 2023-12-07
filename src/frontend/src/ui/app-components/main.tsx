import { useContext, useState } from "react";
import Canals from "./canals";
import Chat from "./chat";
import { Users } from "./users";
import { Canal } from "../../domain/canal";

import 'bootstrap/dist/css/bootstrap.min.css';
import { RepositoriesContext } from "../repositories-context";

function Main() {

    const [canal, setCanal] = useState<Canal | null>(null)
    const repositories = useContext(RepositoriesContext)

    const handleCanalChanged = (name: string) => {
        const c = repositories.canalRepository.getCanals().find(x => x.name == name) ?? null
        setCanal(c)
    }

    return (
        <div className="container-fuild">
            <div className="row">
                <div className="col-md-3 p-3">
                    <Canals onCanalChange={handleCanalChanged} />
                </div>

                <div className="col-md-6 p-3">
                    <Chat canal={canal} />
                </div>

                <div className="col-md-3">
                    <div className="p-3">
                        <Users />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;