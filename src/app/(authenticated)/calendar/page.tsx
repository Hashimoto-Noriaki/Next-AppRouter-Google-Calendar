'use client'

import { getMonth } from 'date-fns'

export default function CalendarPage() {
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${getMonth(new Date)+ 1}月`}
            </h1>
        </>
    )
}
