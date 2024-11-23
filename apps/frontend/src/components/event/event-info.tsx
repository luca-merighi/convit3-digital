import { Event } from 'core'
import Information from '../shared/information'

export interface EventInfoProps {
    event: Event,
    className?: string
}

export default function EventInfo({ event, className }: EventInfoProps) {
    return (
        <div className={`
        flex flex-col gap-2
        ${className ?? ''}`}>
            <div className="flex flex-1 gap-4 items-center
            px-6 py-3
            border border-zinc-800 rounded-lg">
                <span className="text-2xl font-black">
                    {event.alias}
                </span>
                <span className="text-xl text-zinc-300">
                    {event.name}
                </span>
            </div>

            <div className="flex gap-2">
                <Information label="Data:">
                    <span>
                        {new Date(event.date!).toLocaleDateString()}
                        {" às "}
                        {new Date(event.date!).toLocaleTimeString()}
                    </span>
                </Information>
                <Information label="Local:">
                    {event.local}
                </Information>
            </div>

            <Information label="Descrição:">
                {event.description}
            </Information>
        </div>
    )
}