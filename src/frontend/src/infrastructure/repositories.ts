import { useState } from "react";
import { Repositories } from "../application/repositories";
import { Canal } from "../domain/canal";
import { User } from "../domain/user";

export function _createRepositories(): Repositories {

    const [canals, setCanals] = useState<Canal[]>([{ name: 'General', users: [], messages: [] }]);
    const users: User[] = [
        { name: 'Pascal' }, { name: 'Bertrand' }, { name: 'Alphonse' }
    ];

    return {
        canalRepository: {
            getCanals() {
                return canals;
            },
            addNew(name: string) {
                setCanals([...canals, { name, users: [], messages: [] }])
            }
        },

        userRepository: {
            getUsers() {
                return users;
            },
        }
    };
}