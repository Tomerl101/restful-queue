import { Test, TestingModule } from '@nestjs/testing';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';

describe('QueueController', () => {
  let controller: QueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QueueController],
      providers: [QueueService],
    }).compile();

    controller = module.get<QueueController>(QueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create new queue', () => {
    const res = controller.create('test1');
    expect(res.status).toEqual('ok');
  });

  it('should another new queue', () => {
    const res = controller.create('test2');
    expect(res.status).toEqual('ok');
  });

  it('should throw error 404 when create queue which is already exist', () => {
    let res = controller.create('test2');
    try {
      res = controller.create('test2');
    } catch (error) {
      expect(error.status).toEqual(409);
    }
  });

  it('should enqueue and dequeue by queue name', () => {
    controller.create('test1');
    controller.create('test2');
    controller.enqueue('test1', 'item1');
    controller.enqueue('test1', 'item2');
    let test1Queue = controller.snapshot('test1');
    const test2Queue = controller.snapshot('test2');
    expect(test1Queue.length).toEqual(2);
    expect(test2Queue.length).toEqual(0);
    controller.dequeue('test1');
    test1Queue = controller.snapshot('test1');
    expect(test1Queue.length).toEqual(1);
    expect(test2Queue.length).toEqual(0);
  });
});
