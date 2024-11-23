import { Injectable } from '@nestjs/common'
import { Event, Guest } from 'core'
import { PrismaProvider } from 'src/db/prisma.provider'

@Injectable()
export class EventPrisma {
    constructor(readonly prisma: PrismaProvider) {}

    save(event: Event) {
        return this.prisma.event.create({
            ...(event as any),
            guests: { create: event.guests }
        })
    }

    saveGuest(event: Event, guest: Guest) {
        return this.prisma.guest.create({
            data: {
                ...guest,
                companionQuantity: +(guest.companionQuantity ?? 0),
                event: { connect: { id: event.id }}
            }
        })
    }

    async searchAll(): Promise<Event[]> {
        return this.prisma.event.findMany() as any
    }

    async searchByID(id: string, complete: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            where: { id },
            include: { guests: complete }
        }) as any
    }

    async searchByAlias(alias: string, complete: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            select: {
                id: true,
                name: true,
                description: true,
                date: true,
                local: true,
                image: true,
                imageBackground: true,
                alias: true,
                password: complete,
                expectedAudience: complete,
                guests: complete,
            },
            where: { alias },
        }) as any
    }
}
