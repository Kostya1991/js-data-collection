import {IStack} from "./IStack";

/** Структура данных - Стэк */
export class Stack<T> implements IStack<T> {
    private stack = [];

    constructor(initialValue?: T[]) {
        if (initialValue) {
            this.stack = [...initialValue];
        }
    }

    /** @inheritdoc */
    public get length(): number {
        return this.stack.length;
    }

    /** @inheritdoc */
    add(item: T): void {
        this.stack.push(item);
    }

    /** @inheritdoc */
    get(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        return this.stack.pop();
    }

    /** @inheritdoc */
    clear(): void {
        this.stack = [];
    }
}
