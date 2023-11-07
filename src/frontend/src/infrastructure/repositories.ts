import { Repositories } from "../application/repositories";
import { Canal } from "../domain/canal";
import { Message } from "../domain/message";
import { User } from "../domain/user";

export function _createRepositories(): Repositories {

    const users: User[] = [
        { name: 'Pascal' }, { name: 'Bertrand' }, { name: 'Alphonse' }
    ];

    return {
        canalRepository: {
            getCanals() {
                return [{ name: 'General', users, messages: <Message[]>[] }];
            }
        },

        userRepository: {
            getUsers() {
                return users;
            },
        }
    };
}