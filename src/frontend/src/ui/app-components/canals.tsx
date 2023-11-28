import { useContext, useState } from "react";
import { RepositoriesContext } from "../../App";
import { getCanals } from "../../application/repositories";
import { CustomModal } from "../ui-components/customModal";
import { List } from "../ui-components/customList";

export function Canals() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const repositories = useContext(RepositoriesContext);

    const handleNameSubmit = (name: string) => {
        repositories.canalRepository.addNew(name)
        setIsModalOpen(false)
    }

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}>
            <button onClick={() => setIsModalOpen(true)}>+ Nouveau</button>
            <List items={getCanals(repositories).map(c => c.name)} label="Canaux" />
            <CustomModal isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onSubmit={handleNameSubmit} />
        </div>
    )
}