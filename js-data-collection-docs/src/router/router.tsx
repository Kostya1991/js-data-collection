import {createBrowserRouter} from "react-router";

import {Routes} from "./routes.enum";

import {App} from "../App";
import {IntroductionPage} from "../pages/Introduction/Introduction.page";
import {ExamplePage} from "../pages/Example/Example.page";
import {QueuePage} from "../pages/Queue/Queue.page";
import {StackPage} from "../pages/Stack/Stack.page";
import {LinkedListPage} from "../pages/LinkedList/LinkedList.page";

export const router = createBrowserRouter([
    {
        path: Routes.Home,
        element: <App />,
        children: [
            {
                index: true,
                element: <IntroductionPage />,
            },
            {
                path: Routes.Example,
                element: <ExamplePage />,
            },
            {
                path: Routes.Queue,
                element: <QueuePage />,
            },
            {
                path: Routes.Stack,
                element: <StackPage />,
            },
            {
                path: Routes.LinkedList,
                element: <LinkedListPage />,
            },
        ],
    },
]);
