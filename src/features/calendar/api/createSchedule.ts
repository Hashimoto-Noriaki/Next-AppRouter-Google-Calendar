import type { NewSchedule } from '@/types/calendar'

export const createSchedule = async(newSchedule:NewSchedule ) => {
    const res = await fetch("/api/schedules",{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body: JSON.stringify(newSchedule)
    })
    return res.json()
}
