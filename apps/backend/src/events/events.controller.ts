import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common'
import { ComplementEvent, ComplementGuest, Data, Event, Guest, ID } from 'core'
import { EventPrisma } from './event.prisma'

@Controller('events')
export class EventsController {
  constructor(readonly prismaEvent: EventPrisma) {}

  @Post()
  async saveEvent(@Body() event: Event) {
    const eventAlreadySaved = await this.prismaEvent.searchByAlias(event.alias)


    if(eventAlreadySaved && eventAlreadySaved.id !== event.id) {
      throw new HttpException('Já existe um evento com esse alias!', 400)
    }

    const eventCompleted = ComplementEvent(this.deserialize(event))
    await this.prismaEvent.save(eventCompleted)
  }

  @Post(':alias/guest')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.prismaEvent.searchByAlias(alias)

    if(!event) {
      throw new HttpException('Evento não não encontrado!', 400)
    }

    const completeGuest = ComplementGuest(event)
    await this.prismaEvent.saveGuest(event, completeGuest)
  }

  @Post('access')
  async accessEvent(@Body() data: { id: string, password: string }) {
    const event = await this.prismaEvent.searchByID(data.id)

    if(!event) {
      throw new HttpException('Evento não encontrado!', 400)
    }

    if(event.password !== data.password) {
      throw new HttpException('Senha não corresponde ao evento!', 400)
    }

    return this.serialize(event)
  }

  @Get()
  async findEvents() {
    const events = await this.prismaEvent.searchAll()

    return events.map(this.serialize)
  }

  @Get(':idOrAlias')
  async findEvent(@Param('idOrAlias') idOrAlias: string) {
    let event: Event

    if (ID.validation(idOrAlias)) {
      event = await this.prismaEvent.searchByID(idOrAlias, true)
    } else {
      event = await this.prismaEvent.searchByAlias(idOrAlias, true)
    }
    return this.serialize(event)
  }

  @Get('/validate/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.prismaEvent.searchByAlias(alias)
    return { valid: !event || event.id === id }
  }

  private serialize(event: Event) {
    if (!event) return null

    return {
      ...event,
      date: Data.format(event.date),
    }
  }

  private deserialize(event: any): Event {
    if (!event) return null

    return {
      ...event,
      date: Data.deformat(event.date),
    } as Event
  }
}
