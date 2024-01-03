import { currentDate } from "../shared/datetime";
import { User } from "./user"

export type Message = {
    content: string,
    author: User,
    createdAt: Date
}

export function createMessage(author: User, content: string): Message {
    return {
        content,
        author,
        createdAt: currentDate?.now() // TODO gérer le fait qu'on l'appelle trop tôt et que currentDate est null
    };
}
