import type { Schedule } from '@/types/calendar'

export const updateSchedule = async (schedule: Schedule) => {
    const res = await fetch("/api/schedules",{
        method: "PATCH",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify(schedule),
    })
    return res.json()
}
