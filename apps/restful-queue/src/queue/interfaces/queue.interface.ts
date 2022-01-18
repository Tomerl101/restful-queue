export interface IQueue {
  id: number;
  enqueue(item: string): void;
  dequeue(): string | undefined;
  getSnapshot(): string[];
  isEmpty(): boolean;
  size(): number;
}
