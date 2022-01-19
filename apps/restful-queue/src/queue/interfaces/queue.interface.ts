export interface IQueue {
  name: string;
  enqueue(item: string): void;
  dequeue(): string | undefined;
  getSnapshot(): string[];
  isEmpty(): boolean;
  size(): number;
}
