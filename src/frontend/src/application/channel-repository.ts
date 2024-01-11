import { Channel } from "../domain/channel"
import { User } from "../domain/user"

export type ChannelRepository = {
    getChannels(): Channel[]
    selected: Channel
    addNew(name: string): void
    select(channel: Channel): void
    addMessage(channel: Channel, author: User, content: string): void
}