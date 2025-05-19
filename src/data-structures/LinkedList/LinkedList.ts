import {ILinkedList} from "./ILinkedList";
import {INode} from "./INode";
import {Node} from "./Node";

/** Структура данных - Связный список */
export class LinkedList<T> implements ILinkedList {
    /** Головной элемент списка */
    private head: INode<T> | null = null;

    // Добавляет элемент в начало списка
    public prepend(item: T): LinkedList<T> {
        this.head = new Node(item, this.head);
        return this;
    }

    /** Добавление элемента в конец списка */
    public append(item: T): LinkedList<T> {
        /** Если первый узел отсутствует - добавляем в начало списка */
        if (!this.head) {
            return this.prepend(item);
        }

        const node = new Node(item);

        let nextItem = this.head;

        while (nextItem.next) {
            nextItem = nextItem.next;
        }

        nextItem.next = node;

        return this;
    }
}
