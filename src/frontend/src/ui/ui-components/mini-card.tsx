type MiniCardProps = {
    content: string
}

function MiniCard({ content }: MiniCardProps) {
    return (
        <div style={{
            marginRight: '10px',
            padding: '4px 8px',
            borderRadius: '5px',
            color: '#5E2750',
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}>
            {content}
        </div>
    )
}

export default MiniCard;