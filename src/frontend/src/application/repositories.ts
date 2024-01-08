import { Channel } from "../domain/channel"
import { User } from "../domain/user"

export type ChannelRepository = {
    getChannels(): Channel[]
    getSelectedChannel(): Channel
    addNew(name: string): void
    selectChannel(channel: Channel): void
}

export type UserRepository = {
    getUsers(): User[]
}

export type Repositories = {
    channelRepository: ChannelRepository
    userRepository: UserRepository
}

export function getChannels(repositories: Repositories) {
    return repositories.channelRepository.getChannels();
}