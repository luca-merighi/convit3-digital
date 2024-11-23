import ValidateEvent from './validate-event'
import Event from '../model/event'
import { ID, Password } from '../../shared'

export default function ComplementEvent(partialEvent: Partial<Event>): Event {
    const errors = ValidateEvent(partialEvent)

    if(errors.length) {
        throw new Error(errors.join("\n"))
    }

    const event: Event = {
        ...partialEvent,
        id: partialEvent.id ?? ID.new(),
        password: partialEvent.password ?? Password.create(20),
        expectedAudience: +(partialEvent.expectedAudience ?? 1)
    } as Event

    return event
}