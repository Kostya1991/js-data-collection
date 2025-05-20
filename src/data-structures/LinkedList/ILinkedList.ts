/** Структура данных - Связный список */
export interface ILinkedList<T> {
    /** Добавляет элемент в начало списка */
    prepend(value: T): ILinkedList<T>;

    /** Добавление элемента в конец списка */
    append(value: T): ILinkedList<T>;

    /** Добавление значения по индексу */
    insert(value: T, index: number): ILinkedList<T>;

    /** Получить элемент по индексу */
    getAt(index: number): T | undefined;

    /** Удалить элемент по индексу (возвращает значение удаленного элемента) */
    removeAt(index: number): T | undefined;

    /** Преобразует список в массив */
    toArray(): T[];

    /** Возвращает количество элементов в списке */
    getSize(): number;

    /** Очистить список */
    clear(): void;
}
