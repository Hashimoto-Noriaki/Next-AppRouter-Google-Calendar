'use client'

import { useState,useEffect } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { addMonths,eachDayOfInterval,eachWeekOfInterval,endOfMonth,endOfWeek,getMonth,startOfMonth } from 'date-fns'
import { CalendarBody,CalendarHeader} from '@/features/calendar/components'
import type { DateList } from "@/types/calendar"

export default function CalendarPage() {
    const [currentDate,setCurrentDate] = useState(new Date())
    const [dateList,setDateList] = useState<DateList>([])

    useEffect(()=> {
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
    },[currentDate])

    const changeToday = () => setCurrentDate(new Date())
    const changePrevMonth = () =>  setCurrentDate((prev) => addMonths(prev,-1))
    const changeNextMonth = () => setCurrentDate((prev) => addMonths(prev,1))

    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${getMonth(currentDate)+ 1}月`}
            </h1>
            <div className="w-[80%] flex justify-between mb-2">
                <div className="flex items-center gap-2">
                    <FaArrowAltCircleLeft
                        className="text-lime-800 text-2xl cursor-pointer"
                        onClick={changePrevMonth}
                    />
                    <button
                        className="bg-lime-800 text-white p-2 rounded-md"
                        onClick={changeToday}
                    >
                        今日
                    </button>
                    <FaArrowAltCircleRight
                        className="text-lime-800 text-2xl cursor-pointer"
                        onClick={changeNextMonth}
                    />
                </div>
            </div>
            <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
                <CalendarHeader/>
                <CalendarBody currentDate={currentDate} dateList={dateList}/>
            </table>
        </>
    )
}
