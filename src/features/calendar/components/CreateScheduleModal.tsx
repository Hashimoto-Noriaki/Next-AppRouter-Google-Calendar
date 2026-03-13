import Modal from 'react-modal'
import { Input, PrimaryBtn, Textarea } from '@/shared/components/atoms'
import { NewSchedule } from '@/types/calendar'

Modal.setAppElement("body")

type PropsType = {
    isOPen: boolean
    onClose:() => void
    newSchedule: NewSchedule
    setNewSchedule: (newSchedule: NewSchedule) => void
    onAddSchedule:() => void
}

export const CreateScheduleModal = ({
    isOpen,
    onClose,
    newSchedule,
    setNewSchedule,
    onAddSchedule,
}: PropsType) => {
    return(
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="bg-white rounded-md p-8 w-125"
            overlayClassName="fixed inset-0 bg-white/30 flex justify-center items-center z-50"
        >
            <h1 className="font-bold text-xl mb-4">予定を作成</h1>
            <div className="flex flex-col gap-5">
                <Input
                    type="text"
                    placeholder="タイトル"
                    value={newSchedule.title}
                    onChange={(e)=>
                        setNewSchedule({ ...newSchedule,title: e.target.value })
                    }
                />
                <Input
                    type="date"
                    value={newSchedule.date}
                    onChange={(e)=>
                        setNewSchedule({ ...newSchedule,date: e.target.value })
                    }
                />
                <Textarea
                    placeholder="説明"
                    value={newSchedule.description}
                    onChange={(e)=> 
                        setNewSchedule({ ...newSchedule,description: e.target.value })
                    }
                />
                <PrimaryBtn size="lg" onClick={onAddSchedule}>作成</PrimaryBtn>
            </div>
        </Modal>
    )
}


