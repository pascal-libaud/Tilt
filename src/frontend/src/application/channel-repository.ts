import { Channel } from "../domain/channel"
import { User } from "../domain/user"

export type ChannelRepository = {
    getChannels(): Channel[]
    getSelectedChannel(): Channel
    addNew(name: string): void
    selectChannel(channel: Channel): void
    addMessage(channel: Channel, author: User, content: string): void
}