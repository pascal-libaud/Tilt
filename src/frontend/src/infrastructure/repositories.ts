import { useState } from "react";
import { ChannelRepository, Repositories, UserRepository } from "../application/repositories";
import { Channel } from "../domain/channel";
import { User } from "../domain/user";
import { Message, createMessage } from "../domain/message";

const pascal = { name: 'Pascal' }
const bertrand = { name: 'Bertrand' }
const alphonse = { name: 'Alphonse' }

const users: User[] = [pascal, bertrand, alphonse]

const messages: Message[] = [
    createMessage(pascal, 'Salut la compagnie !'),
    createMessage(bertrand, 'Salut !'),
    createMessage(alphonse, 'Yo !'),
    createMessage(pascal, 'Quoi de neuf ?')
]

function useChannelRepository(): ChannelRepository {
    const defaultChannels: Channel[] = [
        { name: 'General', users: [...users], messages: [...messages] },
        { name: 'Privé', users: [...users], messages: [] },
        { name: 'Dev', users: [...users], messages: [] }
    ]

    const [channels, setChannels] = useState<Channel[]>(defaultChannels);
    const [selected, setSelected] = useState<Channel>(channels[0]);

    return {
        getChannels() {
            return channels;
        },
        getSelectedChannel() {
            return selected;
        },
        addNew(name: string) {
            setChannels([...channels, { name, users: [], messages: [] }])
        },
        selectChannel(channel: Channel) {
            setSelected(channel)
        }
    }
}

function useUserRepository(): UserRepository {
    return {
        getUsers() {
            return users;
        }
    };
}

export function _createRepositories(): Repositories {
    return {
        channelRepository: useChannelRepository(),
        userRepository: useUserRepository()
    }
}