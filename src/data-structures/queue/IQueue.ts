/** Структура данных - Очередь */
export interface IQueue<T> {
    /** длина очереди */
    length: number;

    /** Добавление элемента в очередь */
    add(item: T): void;

    /** Получение элемента из очереди */
    get(): T | undefined;

    /** Очистка очереди */
    clear(): void;
}
