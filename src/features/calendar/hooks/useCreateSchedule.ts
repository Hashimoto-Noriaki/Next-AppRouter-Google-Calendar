import { useState } from 'react'
import { format } from 'date-fns'
import { createSchedule } from '@/features/calendar/api/createSchedule'
import type { NewSchedule } from '@/types/calendar'

const initialNewSchedule: NewSchedule = {
    title: "",
    date: "",
    description: "",
}

const getInitialSchedule = (date: Date): NewSchedule => ({
    ...initialNewSchedule,
    date: format(date,"yyyy-MM-dd")
})

type PropsType = {
    currentDate: Date
    onSuccess: () => void
}

export const useCreateSchedule = ({ currentDate, onSuccess }: PropsType) => {
    const [newSchedule,setNewSchedule] = useState<NewSchedule>(
        getInitialSchedule(currentDate)
    )

    const addSchedule = async() => {
        if(!newSchedule.title || !newSchedule.date) return
        await createSchedule(newSchedule)
        onSuccess()
        setNewSchedule(getInitialSchedule(currentDate))
    }
    return { newSchedule, setNewSchedule, addSchedule }
}
