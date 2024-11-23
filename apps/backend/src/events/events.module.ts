import { Module } from '@nestjs/common'
import { EventsController } from './events.controller'
import { DbModule } from 'src/db/db.module'

@Module({
  imports: [DbModule],
  controllers: [EventsController]
})
export class EventsModule {}
