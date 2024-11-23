import { ReactNode } from 'react'

interface InformationProps {
    label: string,
    children: ReactNode
}

export default function Information({ label, children }: InformationProps) {
    return (
        <div className="
            flex flex-col flex-1 items-start
            px-6 py-3
            border border-zinc-800 rounded-lg">
            <span className="text-zinc-400 font-bold">
                {label}
            </span>
            <div className="text-xl">
                {children}
            </div>
        </div>
    )
}