"use server"

import { prisma } from '@/libs/prisma'
import type { NewSchedule, Schedule } from '@/types/calendar'

export const getSchedule = async() => {
    return await prisma.schedule.findMany()
}

export const createSchedule = async(newSchedule: NewSchedule) => {
    await prisma.schedule.create({data: newSchedule })
}

export const updateSchedule = async({ id, title, date, description }: Schedule) => {
    return await prisma.schedule.update({
        where: { id },
        data: { title, date, description },
    })
}

export const deleteSchedule = async(id: number) => {
    await prisma.schedule.delete({ where: { id } })
    return { id }
}
