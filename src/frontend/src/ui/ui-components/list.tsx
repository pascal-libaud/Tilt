import { useState, ReactNode } from 'react';

type ListItemProps<T> = {
    item: T
    isSelected: boolean
    getLabel(item: T): string
    onClick: (item: T) => void
}

const ListItem = <T,>({ item, isSelected, getLabel, onClick }: ListItemProps<T>) => {
    const [isHovered, setIsHovered] = useState(false);

    const backgroundTranparency = () => {
        if (isSelected)
            return isHovered ? 0.4 : 0.3
        else
            return isHovered ? 0.2 : 0
    }

    return (
        <div
            style={{
                padding: '5px',
                backgroundColor: `rgba(0, 0, 0, ${backgroundTranparency()})`,
                cursor: isHovered ? 'pointer' : 'default'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(item)}>
            {getLabel(item)}
        </div>
    )
}

type ListProps<T> = {
    children?: ReactNode
    items: T[]
    getItemLabel(item: T): string
    getKey?(item: T): string
    initialSelectedItem?: T | null
    label?: string
    onClick?: (item: T) => void
}

const List = <T,>({ children, items, getItemLabel, getKey, initialSelectedItem, label, onClick }: ListProps<T>) => {

    const [selectedItem, setSelectedItem] = useState<T | null>(initialSelectedItem ?? null)

    return (
        <div>
            <p>
                <b>{label?.toUpperCase()}</b>
                &nbsp;
                {children}
            </p>

            {items.map((item) => (
                <ListItem
                    key={(getKey ?? getItemLabel)(item)}
                    item={item}
                    getLabel={getItemLabel}
                    isSelected={item === selectedItem}
                    onClick={item => {
                        onClick && onClick(item)
                        setSelectedItem(item)
                    }} />
            ))}
        </div>
    )
}

export default List;