import { useState } from 'react';

type ListItemProps = {
    item: string;
    onClick: (item: string) => void;
}

const ListItem = ({ item, onClick }: ListItemProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                padding: '10px',
                backgroundColor: isHovered ? '#e0e0e0' : 'transparent',
                cursor: isHovered ? 'pointer' : 'default'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(item)}>
            {item}
        </div>
    )
}

type ListProps = {
    items: string[],
    label?: string
}

const List = ({ items, label }: ListProps) => {
    const handleItemClick = (item: string) => {
        console.log(`TODO ICI, Cliqué sur : ${item}`)
    }

    return (
        <div>
            <p>{label}</p>
            {items.map((item) => (
                <ListItem key={item} item={item} onClick={handleItemClick} />
            ))}
        </div>
    )
}

export { List };