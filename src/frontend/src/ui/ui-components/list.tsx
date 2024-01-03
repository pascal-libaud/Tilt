import { useState, ReactNode } from 'react';

type ListItemProps = {
    item: string
    isSelected: boolean
    onClick: (item: string) => void
}

const ListItem = ({ item, isSelected, onClick }: ListItemProps) => {
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
            {item}
        </div>
    )
}

type ListProps = {
    children?: ReactNode
    items: string[]
    initialSelectedItem?: string | null
    label?: string
    onClick?: (item: string) => void
}

const List = ({ children, items, initialSelectedItem, label, onClick }: ListProps) => {

    const [selectedItem, setSelectedItem] = useState<string | null>(initialSelectedItem ?? null)

    return (
        <div>
            <p>
                <b>{label?.toUpperCase()}</b>
                &nbsp;
                {children}
            </p>

            {items.map((item) => (
                <ListItem
                    key={item}
                    item={item}
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