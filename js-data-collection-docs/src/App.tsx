import {Layout} from "./components/Layout";
import {Sidebar} from "./components/Sidebar";
import {MainTitle} from "./components/MainTitle";
import {Menu} from "./components/Menu";
import {Main} from "./components/Main";

export const App = () => {
    return (
        <Layout>
            <Sidebar>
                <MainTitle />
                <Menu />
            </Sidebar>

            <Main />
        </Layout>
    );
};
