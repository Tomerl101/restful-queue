export interface IQueue {
  id: string;
  enqueue(item: string): void;
  dequeue(): string | undefined;
  getSnapshot(): string[];
  isEmpty(): boolean;
  size(): number;
}
