'use client'

import { useState } from 'react'
import Modal from 'react-modal'
import { Input,Textarea } from '@/shared/components/atoms'
import type { Schedule } from '@/types/calendar'

Modal.setAppElement("body")

type PropsType = {
    selectedSchedule: Schedule | null
    onClose: () => void
    onUpdate:(schedule: Schedule) => void
    onDelete:(id: number) => void
}

export const ScheduleDetailModal = ({
    selectedSchedule,
    onClose,
    onUpdate,
    onDelete,
}: PropsType) => {
    const [isEditing,setIsEditing] = useState(false)
    const [editSchedule,setEditSchedule] = useState<Schedule | null>(null)

    const handleOpen = () => {
        setEditSchedule(selectedSchedule)
        setIsEditing(false)
    }

    return(
        <Modal
            isOpen={!!selectedSchedule}
            onRequestClose={onClose}
            onAfterOpen={handleOpen}
            className="bg-white rounded-lg p-8 w-125"
            overlayClassName="fixed inset-0 bg-white/30 flex items-center justify-center z-50"
        > 
            <h2 className="font-bold text-xl mb-4">予定の詳細</h2>
            <div className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="タイトル"
                    value={editSchedule?.title ?? ""}
                    readOnly={!isEditing}
                    onChange={(e)=>
                        setEditSchedule((prev)=>
                            prev ? {...prev, title:e.target.value} : null
                        )
                    }
                />
                <Input
                    type="date"
                    value={editSchedule?.date ?? ""}
                    readOnly={!isEditing}
                    onChange={(e)=>
                        setEditSchedule((prev)=>
                            prev ? {...prev,date: e.target.value} : null
                        )
                    }
                />
                <Textarea
                    placeholder="説明"
                    value={editSchedule?.description ?? ""}
                    readOnly={!isEditing}
                    onChange={(e) =>
                        setEditSchedule((prev)=>
                            prev ? {...prev,description: e.target.value} : null
                        )
                    }
                />
                {isEditing ? (
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-lime-800 text-white rounded px-6 py-2"
                            onClick={() => {
                                if(editSchedule) onUpdate(editSchedule)
                            }}
                        >
                            更新
                        </button>
                    </div>
                ): (
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-lime-800 text-white rounded px-6 py-2"
                            onClick={onClose}
                        >
                            閉じる
                        </button>
                        <button
                            className="bg-gray-200 text-gray-700 rounded px-6 py-2"
                            onClick={() => setIsEditing(true)}
                        >
                            編集
                        </button>
                        <button
                            className="bg-red-500 text-white rounded px-6 py-2"
                            onClick={() => {
                                if(selectedSchedule) onDelete(selectedSchedule.id)
                            }}
                        >
                            削除
                        </button>
                    </div>
                )}
            </div>
        </Modal>
    )
}
