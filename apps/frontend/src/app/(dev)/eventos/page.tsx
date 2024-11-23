import Image from 'next/image'
import Link from 'next/link'

import { events } from 'core'
import QRCode from 'react-qr-code'

export default function Eventos() {
    return (
        <div className="grid grid-cols-3 gap-5">
            {events.map(event => {
                return (
                    <div
                        key={event.id}
                        className="
                        flex flex-col w-full
                        bg-zinc-800 rounded-lg overflow-hidden">
                        <div className="relative w-full h-44">
                            <Image
                                src={event.image} alt={event.name}
                                fill
                                className="object-cover" />
                        </div>

                        <div className="flex flex-1 flex-col gap-5 items-center p-7 text-center">
                            <span className="text-lg text-white font-black">
                                {event.name}
                            </span>
                            <p className="flex-1 text-sm text-zinc-400">
                                {event.description}
                            </p>

                            <QRCode
                                value={JSON.stringify({ id: event.id, password: event.password })}
                                className="w-44 h-52" />

                            <div className="flex gap-5">
                                <Link
                                    href={`/evento/admin/${event.id}/${event.password}`}
                                    className="button button-red flex-1">
                                    Admin
                                </Link>
                                <Link
                                    href={`/convite/${event.alias}`}
                                    className="button button-green flex-1">
                                    Convite
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}