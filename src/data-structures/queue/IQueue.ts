export interface IQueue<T> {
    length: number;

    add(item: T): void;

    get(): T;

    clear(): void;
}
