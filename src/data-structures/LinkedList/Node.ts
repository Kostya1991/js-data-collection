import {INode} from "./INode";

/** Элемент связного списка */
export class Node<T> implements INode<T> {
    /** Значение элемента */
    public current: T;

    /** Ссылка на следующий узел */
    public next: INode<T> | null = null;

    constructor(item: T, next: INode<T> | null = null) {
        this.current = item;
        this.next = next;
    }
}
