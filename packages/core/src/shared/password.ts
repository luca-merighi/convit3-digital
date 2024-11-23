export default class Password {
    static create(length: number = 15): string {
        const lowercase = 'abcdefghijklmnopqrstuvwxyz'
        const uppercase = lowercase.toUpperCase()
        const numbers = '0123456789'
        const specials = '!@#$%&*'

        const groups = [lowercase, uppercase, numbers, specials]
        const password = []

        for (let i = 0; i < length; i++) {
            const group = groups[Math.floor(Math.random() * groups.length)]
            password.push(group[Math.floor(Math.random() * groups.length)])
        }

        return password.join("")
    }
}