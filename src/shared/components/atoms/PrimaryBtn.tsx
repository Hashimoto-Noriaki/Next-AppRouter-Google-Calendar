import { ComponentProps, ReactNode } from 'react'

type PropsType = {
    children: ReactNode
} & ComponentProps<'button'>

export const PrimaryBtn = ({ children, ...props }: PropsType) => {
    return (
        <button
            className="bg-lime-800 text-white rounded-lg text-lg p-4"
            {...props}
        >
            {children}
        </button>
    )
}
