'use client'

import { ReactNode,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaUser } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import { useLoginUser } from '@/features/auth'

export default function AuthenticatedLayout({ children }: { children: ReactNode }) {
    const router = useRouter()
    const { loginUser, setLoginUser } = useLoginUser()

    const handleLogout = () => {
        setLoginUser({ id: 0, name: "" })
        router.push("/login")
    }

    useEffect(()=> {
        if(loginUser.id === 0) router.push("/login")
    },[loginUser,router])

    if(loginUser.id === 0) return null

    return (
        <div className="relative">
            <header className="bg-white leading-12.5 fixed top-0 left-0 right-0">
                <div className="container mx-auto flex justify-between">
                    <Link href="/" className="logo">スケジュール管理APP</Link>
                    <nav>
                        <ul className="flex justify-center gap-5 text-lime-800">
                            <li className="flex items-center gap-2">
                                <FaUser/>
                                {loginUser.name}
                            </li>
                            <li className="flex items-center gap-2">
                                <MdLogout/>
                                <span onClick={handleLogout}>ログアウト</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="pt-12.5 bg-linear-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
                {children}
            </main>
        </div>
    )
}
