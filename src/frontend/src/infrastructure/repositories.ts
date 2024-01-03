import { useState } from "react";
import { CanalRepository, Repositories, UserRepository } from "../application/repositories";
import { Canal } from "../domain/canal";
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

function useCanalRepository(): CanalRepository {
    const defaultCanals: Canal[] = [
        { name: 'General', users: [...users], messages: [...messages] },
        { name: 'Privé', users: [...users], messages: [] },
        { name: 'Dev', users: [...users], messages: [] }
    ]

    const [canals, setCanals] = useState<Canal[]>(defaultCanals);
    const [selected, setSelected] = useState<Canal>(canals[0]);

    return {
        getCanals() {
            return canals;
        },
        getSelectedCanal() {
            return selected;
        },
        addNew(name: string) {
            setCanals([...canals, { name, users: [], messages: [] }])
        },
        selectCanal(canal: Canal) {
            setSelected(canal)
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
        canalRepository: useCanalRepository(),
        userRepository: useUserRepository()
    }
}