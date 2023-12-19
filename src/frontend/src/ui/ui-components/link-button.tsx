import { CSSProperties, ReactNode } from 'react';
import './link-button.css'

type LinkButtonProps = {
    children: ReactNode
    style?: CSSProperties | undefined
    onClick?: () => void
}

const LinkButton = ({ children, style, onClick }: LinkButtonProps) => {

    return (
        <button style={style} className='link-button' onClick={onClick}>
            {children}
        </button>
    )
}

export default LinkButton;