import { Controller, Post, Body, Param, Delete, Get } from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
@Controller('queue/:id')
export class QueueController {

  constructor(private readonly queueService: QueueService) {}

  @Post()
  create(@Body() createQueueDto: CreateQueueDto) {
    return this.queueService.create(createQueueDto);
  }

  @Get('/snapshot')
  snapshot(@Param('id') id: string) {
    return this.queueService.snapshot(id);
  }

  @Post('/enqueue')
  enqueue(@Param('id') id: string, @Body() item: string) {
    console.log(item);
    return this.queueService.enqueue(id, item);
  }

  @Delete('/dequeue')
  dequeue(@Param('id') id: string) {
    return this.queueService.dequeue(id);
  }

}
