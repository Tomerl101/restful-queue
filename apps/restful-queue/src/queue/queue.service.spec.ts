import { Test, TestingModule } from '@nestjs/testing';
import { Queue } from './entities/queue.entity';
import { QueueService } from './queue.service';

describe('QueueService', () => {
  let service: QueueService;
  let queue  = null;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueueService],
    }).compile();

    service = module.get<QueueService>(QueueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should enqueue', () => {
    queue = new Queue('test');
    queue.enqueue("item1");
    expect(queue.size()).toEqual(1);
    queue.enqueue("item1");
    expect(queue.size()).toEqual(2);
    queue.enqueue("item1");
    expect(queue.size()).toEqual(3);
  });

  it('should dequeue', () => {
    queue = new Queue('test');
    queue.enqueue("item1");
    queue.enqueue("item2");
    queue.enqueue("item3");
    let res = queue.dequeue();
    expect(queue.size()).toEqual(2);
    expect(res).toEqual("item1");
    res = queue.dequeue();
    expect(queue.size()).toEqual(1);
    expect(res).toEqual("item2");
    res = queue.dequeue();
    expect(queue.size()).toEqual(0);
    expect(res).toEqual("item3");
    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });

  it('should get snapshot', () => {
    queue = new Queue('test');
    queue.enqueue("item1");
    let items = queue.getSnapshot();
    expect(items.length).toEqual(1);
    expect(items[0]).toEqual("item1");
    queue.enqueue("item2");
    queue.enqueue("item3");
    items = queue.getSnapshot();
    expect(items.length).toEqual(3);
    expect(items[1]).toEqual("item2");
    expect(items[2]).toEqual("item3");
  });
});
