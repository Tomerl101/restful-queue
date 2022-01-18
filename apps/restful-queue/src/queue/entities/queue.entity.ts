import { IQueue } from "../interfaces/queue.interface";

export class Queue implements IQueue{
  public id: string;

  constructor(id: string, private queue: string[] = []) {
    this.id = id;
  }

  enqueue(item: string): void {
    this.queue.push(item);
  }

  dequeue(): string | undefined {
    return this.queue.shift();
  }

  getSnapshot(): string[] {
    return this.queue.slice();
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }
}
