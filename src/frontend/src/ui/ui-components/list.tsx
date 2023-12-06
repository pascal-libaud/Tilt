import { useState, ReactNode } from 'react';

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
    children?: ReactNode,
    items: string[],
    label?: string,
    onClick?: (item: string) => void
}

const List = ({ children, items, label, onClick }: ListProps) => {
    return (
        <div>
            <p>
                {label}
                {children}
            </p>
            {items.map((item) => (
                <ListItem key={item} item={item} onClick={item => onClick && onClick(item)} />
            ))}
        </div>
    )
}

export default List;