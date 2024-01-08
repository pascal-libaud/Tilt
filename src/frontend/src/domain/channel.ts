import { Message } from "./message"
import { User } from "./user"

export type Channel = {
    name: string,
    users: User[],
    messages: Message[]
}

export function addUser(channel: Channel, user: User) {
    return { ...channel, users: [...channel.users, user] }
}

export function addMessage(channel: Channel, message: Message) {
    return { ...channel, messages: [...channel.messages, message] }
}