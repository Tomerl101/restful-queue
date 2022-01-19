import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { Queue } from './entities/queue.entity';

@Injectable()
export class QueueService {
  queue = new Queue("1");

  create(createQueueDto: CreateQueueDto) {
    return 'This action adds a new queue';
  }

  enqueue(id: string, item: string) {
    this.queue.enqueue(item);
    return this.queue.getSnapshot();
  }

  dequeue(id: string) {
    const item = this.queue.dequeue();
    return item;
  }

  snapshot(id: string) {
    return this.queue.getSnapshot();
  }

}
