import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
@Controller('queue')
export class QueueController {

  constructor(private readonly queueService: QueueService) {}

  @Post()
  create(@Body() createQueueDto: CreateQueueDto) {
    return this.queueService.create(createQueueDto);
  }

  @Post()
  enqueue(@Param('id') id: string, @Body() item: string) {
    return this.queueService.enqueue(id, item);
  }

  @Delete()
  dequeue(@Param('id') id: string) {
    return this.queueService.dequeue(id);
  }

}
