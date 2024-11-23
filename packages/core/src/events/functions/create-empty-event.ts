import Event from '../model/event'
import { ID } from '../../shared'

export default function CreateEmptyEvent(): Partial<Event> {
    return {
        id: ID.new(),
        name: "",
        description: "",
        date: new Date(),
        local: "",
        expectedAudience: 1,
        image: "",
        imageBackground: "",
    }
}