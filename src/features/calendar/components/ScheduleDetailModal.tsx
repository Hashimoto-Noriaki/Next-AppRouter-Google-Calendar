'use client'

import Modal from 'react-modal'
import { Input,PrimaryBtn,Textarea } from '@/shared/components/atoms'
import type { Schedule } from '@/types/calendar'

Modal.setAppElement("body")

type PropsType = {
    selectedSchedule: Schedule | null
    onClose: () =>void
}

export const ScheduleDetailModal = ({
    selectedSchedule,
    onClose,
}:PropsType)=> {
    return(
        <Modal
            isOpen={!!selectedSchedule}
            onRequestClose={onClose}
            className="bg-white rounded-lg p-8 w-125"
            overlayClassName="fixed inset-0 bg-white/30 flex items-center justify-center z-50"
        > 
            <h2 className="font-bold text-xl mb-4">予定の詳細</h2>
            <div className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="タイトル"
                    value={selectedSchedule?.title ?? ""}
                    readOnly
                />
                <Input
                    type="date"
                    value={selectedSchedule?.date ?? ""}
                    readOnly
                />
                <Textarea
                    placeholder="説明"
                    value={selectedSchedule?.description ?? ""}
                    readOnly
                />
                <PrimaryBtn size="lg" onClick={onClose}>
                    閉じる
                </PrimaryBtn>
            </div>
        </Modal>
    )
}
