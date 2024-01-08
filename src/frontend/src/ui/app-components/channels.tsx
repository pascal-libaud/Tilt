import { useContext, useState } from "react";
import CustomModal from "../ui-components/modal";
import List from "../ui-components/list";
import { ChannelRepositoryContext } from "../repositories-context";

type ChannelsProps = {
    onChannelChange: (name: string) => void
}

function Channels({ onChannelChange }: ChannelsProps) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const channelRepository = useContext(ChannelRepositoryContext)

    const handleNameSubmit = (name: string) => {
        channelRepository.addNew(name)
        setIsModalOpen(false)
    }

    return (
        <div>
            <List
                items={channelRepository.getChannels().map(c => c.name)}
                label="Canaux"
                onClick={onChannelChange}>

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

export default Channels;