import { DAYS_LIST } from '@/constants/calendar'

export const CalendarHeader = () => {
    return (
        <thead>
            <tr className="bg-lime-800 text-white rounded-tr-lg rounded-tl-lg py-10">
                {DAYS_LIST.map((day)=> (
                    <th key={day} className="text-xl text-center py-3">
                        {day}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
