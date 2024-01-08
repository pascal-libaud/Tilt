import { User } from "../domain/user"

export type UserRepository = {
    getUsers(): User[]
    getConnected(): User
}