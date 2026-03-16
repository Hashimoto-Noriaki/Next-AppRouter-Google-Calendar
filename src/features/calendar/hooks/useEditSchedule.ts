import { updateSchedule } from '@/features/calendar/api/updateSchedule'
import { deleteSchedule } from '@/features/calendar/api/deleteSchedule'
import type { Schedule } from '@/types/calendar'

type PropsType = {
    onSuccess:() => void
}

export const useEditSchedule = ({ onSuccess }: PropsType) => {
    const editSchedule = async(schedule: Schedule) => {
        await updateSchedule(schedule)
        onSuccess()
    }

    const removeSchedule = async(id: number) => {
        await deleteSchedule(id)
        onSuccess()
    }

    return { editSchedule , removeSchedule }
}
