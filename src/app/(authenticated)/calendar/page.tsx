'use client'

import { useState,useEffect } from 'react'
import { eachDayOfInterval,eachWeekOfInterval,endOfMonth,endOfWeek,getMonth,getDate,isSameMonth,isToday,startOfMonth } from 'date-fns'
import { DAYS_LIST } from '@/constants/calendar'

export default function CalendarPage() {
    const [dateList,setDateList] = useState<DateList>([])

    const dateColor = (targetDate: Date, currentDate: Date): string => {
        if (isToday(targetDate)) return "bg-lime-800 text-white rounded-full"
        return isSameMonth(targetDate,currentDate) ? "text-black" : "text-gray-300"
    }

    useEffect(()=> {
        const currentDate = new Date()

        const fetchCalendar = async() => {
            const res = await fetch("/api/schedules")
            await res.json()

            const monthOfSundayList = eachWeekOfInterval({
                start:startOfMonth(currentDate),
                end:endOfMonth(currentDate),
            })

            const newDateList: DateList = monthOfSundayList.map((date)=> (
                eachDayOfInterval({
                    start:date,
                    end:endOfWeek(date),
                }).map((date)=> ({ date, schedules: []}))
            ))
            setDateList(newDateList)
        }
        fetchCalendar()
    },[])


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
                <tbody>
                    {dateList.map((oneWeek,weekIndex)=> (
                        <tr key={`week-${weekIndex}`} className="mx-10">
                            {oneWeek.map((item,dateIndex)=> (
                                <td
                                    key={`day-${weekIndex}-${dateIndex}`}
                                    className="bg-white h-[10vh] border-2 border-solid border-lime-800"
                                >
                                    <span className={`inline-block w-5 leading-5 text-center ${dateColor(
                                        item.date,
                                        new Date()
                                    )}`}>
                                        {getDate(item.date)}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
