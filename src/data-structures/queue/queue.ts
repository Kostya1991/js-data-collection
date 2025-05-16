import {IQueue} from "./IQueue";

/** Структура данных - Очередь */
export class Queue<T> implements IQueue<T> {
    private queue: T[] = [];

    /** @inheritdoc */
    public get length(): number {
        return this.queue.length;
    }

    constructor(initialValue?: T[]) {
        if (initialValue) {
            this.queue = [...initialValue];
        }
    }

    /** @inheritdoc */
    public add(item: T): void {
        this.queue.push(item);
    }

    /** @inheritdoc */
    public get(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        return this.queue.shift();
    }

    /** @inheritdoc */
    public clear(): void {
        this.queue = [];
    }
}
