import { useContext } from "react";
import { RepositoriesContext } from "../App";
import { getCanals } from "../application/repositories";

export function Main() {
    const repositories = useContext(RepositoriesContext);

    return (
        <>
            {getCanals(repositories).map(c => <div key={c.name}>{c.name}</div>)}
        </>
    )
}