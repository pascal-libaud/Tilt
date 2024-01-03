type CardProps = {
    header: string
    content: string
}

const Card = ({ header, content }: CardProps) => {

    return (
        <div style={{ paddingTop: '10px' }}>
            <div style={{ paddingLeft: '5px' }}>{header}</div>
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', paddingLeft: '10px' }}>{content}</div>
        </div>
    )
}

export default Card;