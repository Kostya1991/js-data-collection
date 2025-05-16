import {IQueue} from "./IQueue";

export class Queue<T> implements IQueue<T> {
    private queue: T[] = [];

    public get length(): number {
        return this.queue.length;
    }

    constructor(initialValue?: T[]) {
        if (initialValue) {
            this.queue = [...initialValue];
        }
    }

    public add(item: T): void {
        this.queue.push(item);
    }

    public get(): T {
        if (this.length === 0) {
            throw Error("В очереди нет элементов");
        }

        return this.queue.shift()!;
    }

    public clear(): void {
        this.queue = [];
    }
}
