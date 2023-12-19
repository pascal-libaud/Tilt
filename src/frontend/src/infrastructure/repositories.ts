import { useState } from "react";
import { CanalRepository, Repositories, UserRepository } from "../application/repositories";
import { Canal } from "../domain/canal";
import { User } from "../domain/user";

function useCanalRepository(): CanalRepository {
    const defaultCanals: Canal[] = [
        { name: 'General', users: [], messages: [] },
        { name: 'Privé', users: [], messages: [] },
        { name: 'Dev', users: [], messages: [] }
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
    const users: User[] = [
        { name: 'Pascal' },
        { name: 'Bertrand' },
        { name: 'Alphonse' }
    ];

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