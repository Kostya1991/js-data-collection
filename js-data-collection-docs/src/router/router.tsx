import {createBrowserRouter} from "react-router";

import {Routes} from "./routes.enum";

import {App} from "../App";
import {IntroductionPage} from "../pages/Introduction/Introduction.page";

export const router = createBrowserRouter([
    {
        path: Routes.Home,
        element: <App />,
        children: [
            {
                index: true,
                element: <IntroductionPage />,
            },
        ],
    },
]);
