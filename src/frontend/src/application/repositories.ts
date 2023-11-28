import { Canal } from "../domain/canal"
import { User } from "../domain/user"

export type CanalRepository = {
    getCanals(): Canal[]
    addNew(name: string): void
}

export type UserRepository = {
    getUsers(): User[]
}

export type Repositories = {
    canalRepository: CanalRepository
    userRepository: UserRepository
}

export function getCanals(repositories: Repositories) {
    return repositories.canalRepository.getCanals();
}