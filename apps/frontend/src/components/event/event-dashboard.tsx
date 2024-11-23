import { Event, Guest } from 'core'

import EventInfo from './event-info'
import QRCodeAcess from './qr-code'
import Statistics from '../shared/statistics'
import GuestList from './guest-list'

export interface EventDashboardProps {
    event: Event,
    confirmed: Guest[],
    absents: Guest[],
    total: number
}

export default function EventDashboard({ event, confirmed, absents, total }: EventDashboardProps) {
    return (
        <div className="flex flex-col gap-2 text-white">
            <div className="flex gap-2 self-stretch">
                <EventInfo event={event} className="flex-1" />
                <QRCodeAcess event={event} />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-6">
                <Statistics
                    text="Expectativa de Convidados:"
                    value={event.expectedAudience}
                    image="/icones/convidados.svg" />

                <Statistics
                    text="Confirmações:"
                    value={confirmed.length}
                    image="/icones/confirmados.svg" />

                <Statistics
                    text="Total Confirmado:"
                    value={total}
                    image="/icones/acompanhantes.svg" />
            </div>

            <button
                type="button"
                className="mt-12 button button-blue self-end">
                <span className="a">
                    Atualizar Lista de Convidados
                </span>
            </button>

            <span className="flex py-2 text-xl font-bold text-white/80">
                Convidados que confirmaram PRESENÇA
            </span>
            <GuestList guests={confirmed} />

            <span className="flex py-2 text-xl font-bold text-white/80">
                Convidados que confirmaram AUSÊNCIA
            </span>
            <GuestList guests={absents} />
        </div>
    )
}