import QRCode from 'react-qr-code'
import { Event } from 'core'

export interface QRCodeProps {
    event: Event
}

export default function QRCodeAcess({ event }: QRCodeProps) {
    return (
       <div className="
        flex flex-col gap-4 items-center justify-center px-10
        border border-zinc-800">
            <span className="text-sm font-light text-zinc-400">
                Acesse via Mobile
            </span>
            <QRCode
                value={JSON.stringify({
                    id: event.id, password: event.password })}
                className="w-32 h-32" />
       </div>
    )
}