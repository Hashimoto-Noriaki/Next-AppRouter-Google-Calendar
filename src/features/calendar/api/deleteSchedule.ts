export const deleteSchedule = async (id: number) => {
    const res = await fetch("/api/schedules",{
        method: "DELETE",
        headers: { "Content-Type":"application/json" },
        body: JSON.stringify({ id }),
    })
    return res.json()
}
