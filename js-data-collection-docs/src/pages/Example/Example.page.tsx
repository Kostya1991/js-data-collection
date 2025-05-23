import SyntaxHighlighter from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `import {Queue} from "js-data-collection";

const queue = new Queue();

queue.add(1);
queue.add(2);

queue.get();
`;

export const ExamplePage = () => {
    return (
        <>
            <h1 style={{fontSize: "60px"}} className="mb-16">
                Пример
            </h1>

            <p className="mb-16">
                Все что Вам необходимо сделать - импортировать в файл нужный класс, создать его instance и использовать
                доступные метода для работы с полученным объектом. Ниже приведен небольшой пример по созданию и
                использованию объекта "Очередь"
            </p>

            <div className="mb-16">
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    {example}
                </SyntaxHighlighter>
            </div>
        </>
    );
};
