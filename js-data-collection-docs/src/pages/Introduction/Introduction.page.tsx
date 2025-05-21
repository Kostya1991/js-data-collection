import SyntaxHighlighter from "react-syntax-highlighter";
import {materialDark} from "react-syntax-highlighter/dist/esm/styles/prism";

export const IntroductionPage = () => {
    return (
        <>
            <h1 style={{fontSize: "60px"}} className="mb-16">
                Введение
            </h1>

            <p className="mb-16">
                <b>JS-DATA-COLLECTION</b> - дополняет JavaScript дополнительными структурами данных
            </p>

            <h2 style={{fontSize: "32px"}} className="mb-16">
                Установка
            </h2>

            <div className="mb-16">
                <SyntaxHighlighter language="javascript" style={materialDark}>
                    $ npm install js-data-collection
                </SyntaxHighlighter>
            </div>

            <div className="mb-16">
                После установки Вам станут доступны дополнительные структуры данных, которые отсутствуют в JavaScript.
                Вам лишь потребуется импортировать соответствующий класс.
            </div>

            <h3 className="mb-16">Плюсы использования готовой библиотеки:</h3>

            <ul style={{marginLeft: "40px"}} className="mb-16">
                <li style={{padding: "4px 0px"}}>Вам не придется создавать классы и описывать их поведение вручную</li>
                <li style={{padding: "4px 0px"}}>
                    Если у Вас несколько проектов - Вам не придется копировать код или выносить его в пакет
                </li>
            </ul>

            <h3 className="mb-16">Доступные структуры данных (версия 1.0.0)</h3>

            <ul style={{marginLeft: "40px"}} className="mb-16">
                <li style={{padding: "4px 0px"}}>Queue (Очередь)</li>
                <li style={{padding: "4px 0px"}}>Stack (Стэк)</li>
                <li style={{padding: "4px 0px"}}>LinkedList (Связный список)</li>
            </ul>
        </>
    );
};
