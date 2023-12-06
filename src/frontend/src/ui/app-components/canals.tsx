import { useContext, useState } from "react";
import { RepositoriesContext } from "../../App";
import { getCanals } from "../../application/repositories";
import CustomModal from "../ui-components/modal";
import List from "../ui-components/list";

export function Canals() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const repositories = useContext(RepositoriesContext);

    const handleNameSubmit = (name: string) => {
        repositories.canalRepository.addNew(name)
        setIsModalOpen(false)
    }

    const handleItemClick = (item: string) => {
        console.log(`TODO ICI, Cliqué sur : ${item}`)
    }

    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '5px'
            }}>
            <List
                items={getCanals(repositories).map(c => c.name)}
                label="Canaux"
                onClick={handleItemClick}>
                <button onClick={() => setIsModalOpen(true)}>+</button>
            </List>
            <CustomModal isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onSubmit={handleNameSubmit} />
        </div>
    )
}