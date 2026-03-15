'use client'

import { useState } from 'react'
import { getMonth } from 'date-fns'
import { useCalendar } from '@/hooks/useCalendar'
import { useCreateSchedule } from '@/features/calendar/hooks/useCreateSchedule'
import { CalendarBody, CalendarHeader, CalendarNav,CreateScheduleModal,ScheduleDetailModal } from '@/features/calendar/components'
import { PrimaryBtn } from '@/shared/components/atoms'
import type { Schedule } from "@/types/calendar"

export default function CalendarPage() {
    const [currentDate,setCurrentDate] = useState(new Date())
    const [isOpenCreateModal,setIsOpenCreateModal] = useState(false)
    const [selectedSchedule,setSelectedSchedule] = useState<Schedule | null>(null)
    const { dateList,refetch } = useCalendar({ currentDate })
    const { newSchedule, setNewSchedule, addSchedule } = useCreateSchedule({
        currentDate,
        onSuccess:() => {
            refetch()
            setIsOpenCreateModal(false)
        },
    })

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
                <CalendarBody 
                    currentDate={currentDate}
                    dateList={dateList}
                    onClickSchedule={(schedule)=> setSelectedSchedule(schedule)}
                />
            </table>
            <CreateScheduleModal
                isOpen={isOpenCreateModal}
                onClose={()=> setIsOpenCreateModal(false)}
                newSchedule={newSchedule}
                setNewSchedule={setNewSchedule}
                onAddSchedule={addSchedule}
            />
            <ScheduleDetailModal
                selectedSchedule={selectedSchedule}
                onClose={() => setSelectedSchedule(null)}
            />
        </>
    )
}
