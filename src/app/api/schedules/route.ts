import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"
import type { NewSchedule, Schedule } from "@/types/calendar"

export async function GET() {
  const schedules = await prisma.schedule.findMany()
  return NextResponse.json(schedules)
}

export async function POST(req: NextRequest) {
  const newSchedule: NewSchedule = await req.json()
  const addedSchedule = await prisma.schedule.create({
    data: newSchedule,
  })
  return NextResponse.json(addedSchedule)
}

export async function PATCH(req: NextRequest) {
  const { id, title, date, description }: Schedule = await req.json()
  const updatedSchedule = await prisma.schedule.update({
    where: { id },
    data: { title, date, description },
  })
  return NextResponse.json(updatedSchedule)
}

export async function DELETE(req: NextRequest) {
  const { id }: { id: number } = await req.json()
  await prisma.schedule.delete({ where: { id } })
  return NextResponse.json({ id })
}
