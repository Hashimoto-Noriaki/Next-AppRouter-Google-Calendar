"use server"

import { prisma } from '@/libs/prisma'
import type { Schedule } from '@/types/calendar'

export const updateSchedule = async ({ id, title, date, description }: Schedule) => {
    return await prisma.schedule.update({
        where: { id },
        data: { title, date, description },
    })
}
