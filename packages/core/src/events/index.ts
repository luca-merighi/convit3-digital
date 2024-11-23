import Event from './model/event'
import Guest from './model/guest'

import ComplementEvent from './functions/complement-event'
import ComplementGuest from './functions/complement-guest'

import CreateEmptyEvent from './functions/create-empty-event'
import CreateEmptyGuest from './functions/create-empty-guest'

CreateEmptyEvent
CreateEmptyGuest

export type { Event, Guest }
export {
    ComplementEvent, ComplementGuest,
    CreateEmptyEvent, CreateEmptyGuest }