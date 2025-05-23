import SyntaxHighlighter from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const interfaceILinkedList = `interface ILinkedList<T> {
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
`;

const example = `import {LinkedList} from "js-data-collection";

const list = new LinkedList(); // LinkedList {head: null}

list.prepend(1); // LinkedList {head: {current: 1, next: null}}

list.append(2); // LinkedList {head: {current: 1, next: {current: 2, next: null}}}

list.toArray(); // [1, 2]

list.getSize(); // 2

list.insert(42, 1); // LinkedList {head: {current: 1, next: {current: 42, next: {current: 2, next: null}}}}

list.removeAt(2); // LinkedList {head: {current: 1, next: {current: 42, next: null}}}

list.clear(); // LinkedList {head: null}
`;

export const LinkedListPage = () => {
    return (
        <>
            <h1 style={{fontSize: "60px"}} className="mb-16">
                Связный список (LinkedList)
            </h1>

            <p className="mb-16">
                Динамическая структура данных, состоящая из узлов, каждый из которых содержит значение и ссылку на
                следующий узел. Последний узел ссылкается на <b>NULL</b>
            </p>

            <div className="mb-16">
                <p>Описание интерфейса</p>
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    {interfaceILinkedList}
                </SyntaxHighlighter>
            </div>

            <div className="mb-16">
                <p>Пример использования</p>
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    {example}
                </SyntaxHighlighter>
            </div>
        </>
    );
};
