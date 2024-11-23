import Guest from '../model/guest'
import ValidateGuest from './validate-guest'

export default function ComplementGuest(guest: Partial<Guest>): Guest {
    const errors = ValidateGuest(guest)

    if(errors.length > 0) {
        throw new Error(errors.join("\n"))
    }

    const companionQuantity = guest.companionQuantity ?? 0
    const guestHasCompanion = guest.hasCompanion && guest.confirmed && companionQuantity > 0

    const updatedGuest = {
        ...guest,
        companionQuantity: guestHasCompanion ? companionQuantity : 0,
        hasCompanion: guestHasCompanion
    }

    return updatedGuest as Guest
}