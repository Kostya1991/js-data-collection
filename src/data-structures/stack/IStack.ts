/** Структура данных - Стэк */
export interface IStack<T> {
    /** Длина стэка */
    length: number;

    /** Добавление элемента */
    add(item: T): void;

    /** Получение элемента */
    get(): T | undefined;

    /** Очистка стэка */
    clear(): void;
}
