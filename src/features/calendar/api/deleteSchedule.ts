"use server"

import { prisma } from '@/libs/prisma'

export const deleteSchedule = async (id: number) => {
    await prisma.schedule.delete({ where: { id } })
    return { id }
}
