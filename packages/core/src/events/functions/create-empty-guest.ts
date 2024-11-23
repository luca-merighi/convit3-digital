import Guest from '../model/guest'
import { ID } from '../../shared'

export default function CreateEmptyGuest(): Partial<Guest> {
    return {
        id: ID.new(),
        name: "",
        email: "",
        confirmed: true,
        hasCompanion: false,
        companionQuantity: 0
    }
}