import { ComponentProps } from 'react'

export const Textarea = (props: ComponentProps<"textarea">) => {
    return (
        <textarea
            className="border border-gray-300 rounded-lg p-2 w-full"
            {...props}
        />
    )
}
