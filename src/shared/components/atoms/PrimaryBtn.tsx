import { ComponentProps, ReactNode } from 'react'

type PropsType = {
    children: ReactNode
    size: 'sm' | 'lg'
} & ComponentProps<'button'>

const SIZE_MAPPING = {
    sm: "p-2 text-sm",
    lg: "p-4 text-lg"
}

export const PrimaryBtn = ({ children,size,...props }: PropsType) => {
    return (
        <button
            className={`bg-lime-800 text-white rounded-lg ${SIZE_MAPPING[size]}`}
            {...props}
        >
            {children}
        </button>
    )
}
