'use client'

import { useLoginUser } from '@/features/auth'

export default function CalendarPage() {
    const { loginUser } = useLoginUser()
    return (
        <div>
            <p>ID: {loginUser.id}</p>
            <p>名前: {loginUser.name}</p>
        </div>
    )
}
