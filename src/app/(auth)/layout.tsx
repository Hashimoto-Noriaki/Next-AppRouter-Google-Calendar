import { ReactNode } from 'react'

type PropsType = {
    children:ReactNode;
}

export default function AuthLayout({ children }: PropsType){
    return (
        <main className="pt-12.5 bg-linear-to-r from-lime-100 to-lime-200 h-screen flex flex-col items-center justify-center">
            {children}
        </main>
    )
}
