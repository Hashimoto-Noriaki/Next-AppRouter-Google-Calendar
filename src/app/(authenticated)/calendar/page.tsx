'use client'

import { getMonth } from 'date-fns'
import { DAYS_LIST } from '@/constants/calendar'

export default function CalendarPage() {
    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${getMonth(new Date)+ 1}月`}
            </h1>
            <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
                <thead>
                    <tr className="bg-lime-800 text-white rounded-tr-lg rounded-tl-lg py-10">
                        {DAYS_LIST.map((day)=> (
                            <th key={day} className="text-xl text-center py-3">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
            </table>
        </>
    )
}
