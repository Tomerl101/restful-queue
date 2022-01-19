import { Controller, Post, Body, Param, Delete, Get, HttpException } from '@nestjs/common';
import { QueueService } from './queue.service';
@Controller('queue')
export class QueueController {

  constructor(private readonly queueService: QueueService) {}

  @Post()
  create(@Body('name') name: string) {
    try {
      this.queueService.create(name);
      return {status: 'ok', message: 'Queue created'};
    } catch (error) {
      throw new HttpException(error.message, 409);
    }
  }

  @Get('/:name/snapshot')
  snapshot(@Param('name') name: string) {
    try {
      return this.queueService.snapshot(name);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Post('/:name/enqueue')
  enqueue(@Param('name') name: string, @Body() item: string) {
    try{
      return this.queueService.enqueue(name, item);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  @Delete('/:name/dequeue')
  dequeue(@Param('name') name: string) {
    try{
      return this.queueService.dequeue(name);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

}
