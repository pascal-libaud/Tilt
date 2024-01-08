import { Channel } from "../domain/channel"

export type ChannelRepository = {
    getChannels(): Channel[]
    getSelectedChannel(): Channel
    addNew(name: string): void
    selectChannel(channel: Channel): void
}