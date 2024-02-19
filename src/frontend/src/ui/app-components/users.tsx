import { UserRepository } from "../../application/user-repository"
import { Channel } from "../../domain/channel"
import { User } from "../../domain/user"

type UsersProps = {
    userRepository: UserRepository
    channel: Channel
}

export function Users({ channel, userRepository }: UsersProps) {

    const getName = (u: User) => { return u.name + (u === userRepository.getConnected() ? ' *' : '') }

    // TODO Créer un ui-component affichant un arbre
    return (
        <div>
            <div>En ligne - {channel.users.filter(u => u.isOnline).length}</div>
            {channel.users.filter(u => u.isOnline).map(u => <div style={{ marginLeft: '20px' }}>{getName(u)}</div>)}
            <div>Hors ligne - {channel.users.filter(u => !u.isOnline).length}</div>
            {channel.users.filter(u => !u.isOnline).map(u => <div style={{ marginLeft: '20px' }}>{getName(u)}</div>)}
        </div>
    )
}