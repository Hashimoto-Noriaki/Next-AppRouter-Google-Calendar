"use server"

import { prisma } from '@/libs/prisma'
import type { NewSchedule } from '@/types/calendar'

export const createSchedule = async ( newSchedule: NewSchedule ) => {
    return await prisma.schedule.create({ data: newSchedule })
}
