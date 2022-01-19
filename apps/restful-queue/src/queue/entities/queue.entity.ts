import { IQueue } from "../interfaces/queue.interface";

export class Queue implements IQueue{
  public name: string;

  constructor(name: string, private queue: string[] = []) {
    this.name = name;
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
