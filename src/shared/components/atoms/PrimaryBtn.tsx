import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
    onClick:() => void;
}

export const PrimaryBtn = ({ children,onClick }: PropsType) => {
    return (
        <button 
            className="bg-lime-800 text-white p-4 text-lg rounded-lg"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
