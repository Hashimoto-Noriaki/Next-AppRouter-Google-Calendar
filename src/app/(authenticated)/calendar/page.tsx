'use client'

import { useState,useEffect } from 'react'
import { eachDayOfInterval,eachWeekOfInterval,endOfMonth,endOfWeek,getMonth,startOfMonth } from 'date-fns'
import { CalendarBody,CalendarHeader} from '@/features/calendar/components'
import type { DateList } from "@/types/calendar"

export default function CalendarPage() {
    const [dateList,setDateList] = useState<DateList>([])

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
                <CalendarHeader/>
                <CalendarBody currentDate={new Date()} dateList={dateList}/>
            </table>
        </>
    )
}
