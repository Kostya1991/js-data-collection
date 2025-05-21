import {v4 as uuidv4} from "uuid";
import {Routes} from "../router/routes.enum";

interface Link {
    to: Routes;
    title: string;
    id: string;
}

interface Menu {
    title: string;
    id: string;
    links: Link[];
}

export const MENU: Menu[] = [
    {
        title: "Начать",
        id: uuidv4(),
        links: [{to: Routes.Home, title: "Введение", id: uuidv4()}],
    },
];
