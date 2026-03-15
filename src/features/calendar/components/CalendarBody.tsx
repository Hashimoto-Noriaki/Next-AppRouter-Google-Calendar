import { getDate } from 'date-fns'
import { dateColor } from '@/libs/date'
import { ScheduleBtn } from '@/shared/components/atoms'
import type { DateList,Schedule } from '@/types/calendar'

type PropsType = {
    currentDate: Date
    dateList: DateList
    onClickSchedule:(schedule: Schedule) => void
}

export const CalendarBody = ({ currentDate, dateList,onClickSchedule }: PropsType) => {
    return (
        <tbody>
            {dateList.map((oneWeek,weekIndex)=> (
                <tr key={`week-${weekIndex}`} className="mx-10">
                    {oneWeek.map((item,dateIndex)=> (
                        <td
                            key={`day-${weekIndex}-${dateIndex}`}
                            className="bg-white h-[10vh] border-2 border-solid border-lime-800"
                        >
                            <span className={`inline-block w-5 leading-5 text-center ${dateColor(
                                item.date,
                                currentDate
                            )}`}>
                                {getDate(item.date)}
                            </span>
                            <div className="flex flex-col items-center gap-1 pb-2">
                                {item.schedules.map((schedule)=> 
                                    <ScheduleBtn 
                                        key={schedule.id}
                                        onClick={()=> onClickSchedule(schedule)}
                                    >
                                        {schedule.title}
                                    </ScheduleBtn>
                                )}
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
