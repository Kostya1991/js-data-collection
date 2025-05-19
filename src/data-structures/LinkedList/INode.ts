export interface INode<T> {
    /** Текущий элемент */
    current: T;

    /** Ссылка на следующий элемент в списке */
    next: INode<T> | null;
}
