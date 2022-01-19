import { Injectable } from '@nestjs/common';
import { CreateQueueDto } from './dto/create-queue.dto';
import { Queue } from './entities/queue.entity';

@Injectable()
export class QueueService {
  // Inmemory implementation for queues. should be separated to a separate service / module
  queues = new Map<string, Queue>();

  create(name: string) {
    const queue = this.queues.get(name);
    if(queue){
      throw new Error('Queue already exists');
    }
    const newQueue = new Queue(name);
    this.queues.set(name, newQueue);
    return newQueue;
  }

  enqueue(name: string, item: string) {
    const queue = this.queues.get(name);
    if(!queue){
      throw new Error('Queue not exists');
    }

    queue.enqueue(item);
    return queue.getSnapshot();
  }

  dequeue(name: string) {
    const queue = this.queues.get(name);
    if(!queue){
      throw new Error('Queue not exists');
    }

    const item = queue.dequeue();
    return item;
  }

  snapshot(name: string) {
    const queue = this.queues.get(name);
    if(!queue){
      throw new Error('Queue not exists');
    }

    return queue.getSnapshot();
  }

}
