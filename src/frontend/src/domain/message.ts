import { DateTimeString, currentDateTime } from "./datetime";
import { Canal } from "./canal"
import { User } from "./user"

export type Message = {
    content: string,
    author: User,
    canal: Canal,
    createdAt: DateTimeString
}

export function createMessage(author: User, canal: Canal, content: string): Message {
    return {
        content,
        author,
        canal,
        createdAt: currentDateTime()
    };
}
