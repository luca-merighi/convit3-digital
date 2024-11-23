import { Guest } from 'core'

import GuestItem from './guest-item'

interface GuestListProps {
    guests: Guest[]
}

export default function GuestList({ guests }: GuestListProps) {
    return (
        <div className="a">
            <ul className="flex flex-col gap-2">
                {guests.map(guest => {
                    return (
                        <GuestItem
                            key={guest.id}
                            guest={guest} />
                    )
                })}
            </ul>
        </div>
    )
}