import SyntaxHighlighter from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const interfaceIStack = `interface IStack<T> {
    /** Длина стэка */
    length: number;

    /** Добавление элемента */
    add(item: T): void;

    /** Получение элемента */
    get(): T | undefined;

    /** Очистка стэка */
    clear(): void;
}
`;

const example = `import {Stack} from "js-data-collection";

const stack = new Stack(); // Stack {stack: [], length: 0}

stack.add(1); // Stack {stack: [1], length: 1}
stack.add(2); // // Stack {stack: [1, 2], length: 2}

const element = stack.get(); // 2; Stack {stack: [1], length: 1}

stack.clear(); // Stack {stack: [], length: 0}

`;

export const StackPage = () => {
    return (
        <>
            <h1 style={{fontSize: "60px"}} className="mb-16">
                Стэк (Stack)
            </h1>

            <p className="mb-16">
                Структура данных в которой элементы помещаются в конец списка, и извлекаются из конца, реализует принцип
                "последний вошел, первый вышел (LIFO)"
            </p>

            <div className="mb-16">
                <p>Описание интерфейса</p>
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    {interfaceIStack}
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
