import Guest from '../model/guest'

export default function ValidateGuest(guest: Partial<Guest>): string[] {
    const errors: string[] = []

    if(!guest.name) {
        errors.push("Nome é obrigatório")
    }

    if(!guest.email) {
        errors.push("E-mail é obrigatória")
    }

    return errors
}