import { PrismaClient } from "@prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"
import { addDays, format } from "date-fns"

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
})
const prisma = new PrismaClient({ adapter })

const today = new Date()

async function main() {
  await prisma.schedule.deleteMany()

  await prisma.schedule.createMany({
    data: [
      {
        title: "予定1",
        description: "説明1",
        date: format(today, "yyyy-MM-dd"),
      },
      {
        title: "予定2",
        description: "説明2",
        date: format(today, "yyyy-MM-dd"),
      },
      {
        title: "予定3",
        description: "説明3",
        date: format(addDays(today, 1), "yyyy-MM-dd"),
      },
      {
        title: "予定4",
        description: "説明4",
        date: format(addDays(today, 7), "yyyy-MM-dd"),
      },
      {
        title: "予定5",
        description: "説明5",
        date: format(addDays(today, -9), "yyyy-MM-dd"),
      },
    ],
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
