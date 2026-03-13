'use client'

import { useState } from 'react'
import { format,getMonth } from 'date-fns'
import { useCalendar } from '@/hooks/useCalendar'
import { CalendarBody, CalendarHeader, CalendarNav,CreateScheduleModal } from '@/features/calendar/components'
import { PrimaryBtn } from '@/shared/components/atoms'
import type { NewSchedule } from '@/types/calendar'

const initialNewSchedule: NewSchedule = {
    title: "",
    date: "",
    description: "",
}

export default function CalendarPage() {
    const [currentDate,setCurrentDate] = useState(new Date())
    const [isOpenCreateModal,setIsOpenCreateModal] = useState(false)
    const [newSchedule, setNewSchedule] = useState<NewSchedule>(initialNewSchedule)
    const { dateList,refetch } = useCalendar({ currentDate })

    const addSchedule = async() => {
        if(!newSchedule.title || !newSchedule.date) return
        await fetch("/api/schedules",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(newSchedule)
        })
        refetch()
        setIsOpenCreateModal(false)
        setNewSchedule({
            ...initialNewSchedule,
            date: format(currentDate,"yyyy-MM-dd")
        })
    }

    return (
        <>
            <h1 className="font-bold text-3xl mb-5">
                {`${getMonth(currentDate)+ 1}月`}
            </h1>
            <div className="w-[80%] flex justify-between mb-2">
                <CalendarNav setCurrentDate={setCurrentDate}/>
                <PrimaryBtn size="sm" onClick={() => setIsOpenCreateModal(true)}>予定を作成</PrimaryBtn>
            </div>
            <table className="w-[80%] border-collapse border-2 border-solid border-lime-800 table-fixed">
                <CalendarHeader/>
                <CalendarBody currentDate={currentDate} dateList={dateList}/>
            </table>
            <CreateScheduleModal
                isOpen={isOpenCreateModal}
                onClose={()=> setIsOpenCreateModal(false)}
                newSchedule={newSchedule}
                setNewSchedule={setNewSchedule}
                onAddSchedule={addSchedule}
            />
        </>
    )
}
