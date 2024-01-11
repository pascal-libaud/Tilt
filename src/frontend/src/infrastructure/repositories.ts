import { useState } from "react";
import { ChannelRepository } from "../application/channel-repository";
import { Channel } from "../domain/channel";
import { User } from "../domain/user";
import { Message, createMessage } from "../domain/message";
import { UserRepository } from "../application/user-repository";

const pascal = { name: 'Pascal', isOnline: true }
const bertrand = { name: 'Bertrand', isOnline: false }
const alphonse = { name: 'Alphonse', isOnline: true }

const users: User[] = [pascal, bertrand, alphonse]

const messages: Message[] = [
    createMessage(pascal, 'Salut la compagnie !'),
    createMessage(bertrand, 'Salut !'),
    createMessage(alphonse, 'Yo !'),
    createMessage(pascal, 'Quoi de neuf ?')
]

export function useChannelRepository(): ChannelRepository {
    const defaultChannels: Channel[] = [
        { name: 'Général', users: [pascal, bertrand, alphonse], messages: [...messages] },
        { name: 'Privé', users: [pascal], messages: [] },
        { name: 'Dev', users: [pascal, alphonse], messages: [] }
    ]

    const [channels, setChannels] = useState<Channel[]>(defaultChannels);
    const [selected, setSelected] = useState<Channel>(channels[0]);

    return {
        getChannels() {
            return channels;
        },
        selected,
        addNew(name: string) {
            setChannels([...channels, { name, users: [], messages: [] }])
        },
        select(channel: Channel) {
            setSelected(channel)
        },
        addMessage(channel: Channel, author: User, content: string) {
            channel.messages.push(createMessage(author, content))
        }
    }
}

export function useUserRepository(): UserRepository {
    return {
        getUsers() {
            return users;
        },
        getConnected() {
            return pascal
        }
    };
}