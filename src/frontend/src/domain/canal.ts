import { Message } from "./message"
import { User } from "./user"

export type Canal = {
    name: string,
    users: User[],
    messages: Message[]
}

export function addUser(canal: Canal, user: User) {
    return { ...canal, users: [...canal.users, user] }
}

export function addMessage(canal: Canal, message: Message) {
    return { ...canal, messages: [...canal.messages, message] }
}