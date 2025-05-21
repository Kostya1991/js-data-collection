import {ILinkedList} from "./ILinkedList";
import {INode} from "./INode";
import {Node} from "./Node";

/** Структура данных - Связный список */
export class LinkedList<T> implements ILinkedList<T> {
    /** Головной элемент списка */
    private head: INode<T> | null = null;

    /** @inheritdoc */
    public prepend(value: T): LinkedList<T> {
        this.head = new Node(value, this.head);
        return this;
    }

    /** @inheritdoc */
    public append(value: T): LinkedList<T> {
        /** Если первый узел отсутствует - добавляем в начало списка */
        if (!this.head) {
            return this.prepend(value);
        }

        const node = new Node(value);

        let nextItem = this.head;

        while (nextItem.next) {
            nextItem = nextItem.next;
        }

        nextItem.next = node;

        return this;
    }

    /** @inheritdoc */
    public insert(value: T, index: number): LinkedList<T> {
        /** Если индекс равен 0, добавляем в начало */
        if (index === 0) {
            return this.prepend(value);
        }

        const node = new Node(value);

        let counter = 1;
        let current = this.head;

        while (current.next) {
            if (counter === index) {
                break;
            }

            current = current.next;
            counter++;
        }

        if (current) {
            node.next = current.next;
            current.next = node;
        } else {
            return this.append(value);
        }

        return this;
    }

    /** @inheritdoc */
    public getAt(index: number): T | undefined {
        let counter = 0;
        let current = this.head;

        /** Если индекс больше длины массива, возвращаем undefined */
        if (index > this.toArray().length - 1) {
            return undefined;
        }

        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current.current ?? undefined;
    }

    /** @inheritdoc */
    public removeAt(index: number): T | undefined {
        let counter = 1;

        let removed;

        if (index === 0) {
            removed = this.head.current;
            this.head = this.head.next;
            return removed;
        }

        /** Если индекс больше длины массива, возвращаем undefined */
        if (index > this.toArray().length - 1) {
            return undefined;
        }

        let prev = this.head;
        let current = this.head.next;
        let next = null;

        while (counter !== index) {
            prev = current;
            current = current.next;
            next = current.next;

            counter++;
        }

        removed = current.current;

        prev.next = next;

        return removed;
    }

    /** @inheritdoc */
    public toArray(): T[] {
        const listArray: T[] = [];

        let current = this.head;

        while (current !== null) {
            listArray.push(current.current);
            current = current.next;
        }

        return listArray;
    }

    /** @inheritdoc */
    public getSize(): number {
        let size = 0;
        let current = this.head;

        while (current !== null) {
            size++;
            current = current.next;
        }

        return size;
    }

    /** @inheritdoc */
    public clear(): void {
        this.head = null;
    }
}
