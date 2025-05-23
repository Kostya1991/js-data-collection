import SyntaxHighlighter from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const interfaceIQueue = `interface IQueue<T> {
    /** длина очереди */
    length: number;

    /** Добавление элемента в очередь */
    add(item: T): void;

    /** Получение элемента из очереди */
    get(): T | undefined;

    /** Очистка очереди */
    clear(): void;
}
`;

const example = `import {Queue} from "js-data-collection";

const queue = new Queue(); // Queue {queue: [], length: 0}

queue.add(1); // Queue {queue: [1], length: 1}
queue.add(2); // // Queue {queue: [1, 2], length: 2}

const element = queue.get(); // 1; Queue {queue: [2], length: 1}

queue.clear(); // Queue {queue: [], length: 0}

`;

export const QueuePage = () => {
    return (
        <>
            <h1 style={{fontSize: "60px"}} className="mb-16">
                Queue (Очередь)
            </h1>

            <p className="mb-16">
                Структура данных в которой элементы помещаются в конец списка, а извлекаются из начала, реализует
                принцип "первый вошел - первый вышел (FIFO)"
            </p>

            <div className="mb-16">
                <p>Описание интерфейса</p>
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    {interfaceIQueue}
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
