import { useContext, useState } from "react";
import { getCanals } from "../../application/repositories";
import CustomModal from "../ui-components/modal";
import List from "../ui-components/list";
import { RepositoriesContext } from "../repositories-context";

type CanalsProps = {
    onCanalChange: (name: string) => void
}

function Canals({ onCanalChange }: CanalsProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const repositories = useContext(RepositoriesContext)

    const handleNameSubmit = (name: string) => {
        repositories.canalRepository.addNew(name)
        setIsModalOpen(false)
    }

    return (
        <div>
            <List
                items={getCanals(repositories).map(c => c.name)}
                label="Canaux"
                onClick={onCanalChange}>

                <button
                    style={{
                        padding: '5px',
                        borderRadius: '5px',
                        width: '28px',
                        fontSize: '16px',
                        backgroundColor: '#535C3C',
                        color: '#fff',
                        border: '1px solid #333',
                        outline: 'none',
                    }}
                    onClick={() => setIsModalOpen(true)}>
                    +
                </button>

            </List>
            <CustomModal isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                onSubmit={handleNameSubmit} />
        </div>
    )
}

export default Canals;