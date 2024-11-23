'use client'

import { use, useEffect, useState } from 'react'
import { Event, events, Guest } from 'core'

import EventDashboard from '@/components/event/event-dashboard'
import FormEvent from '@/components/event/form-event'

export default function EventAdmin(props: any) {
    const params: any = use(props.params)

    const id = params.all[0]
    const [event, setEvent] = useState<Event | null>(null)
    const [password, setPassword] = useState<string | null>(params.all[1] ?? null)

    const confirmed = event?.guests.filter(guest => guest.confirmed) ?? []
    const absent = event?.guests.filter(guest => !guest.confirmed) ?? []

    const total = confirmed?.reduce((total: number, guest: Guest) => {
        return total + guest.companionQuantity + 1
    }, 0) ?? 0

    function loadEvent() {
        const event = events.find(
            event => event.id === id && event.password === password)

        setEvent(event ?? null)
    }

    useEffect(() => {
        loadEvent()
    }, [id, password])

    return (
        <div className="flex flex-col items-center">
            {event ? (
                <EventDashboard
                    event={event}
                    confirmed={confirmed}
                    absents={absent}
                    total={total} />
            ) : <FormEvent />}
        </div>
    )
}