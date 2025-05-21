import {Outlet} from "react-router";

export const Main = () => {
    return (
        <main
            style={{
                width: "calc(100% - var(--sidebar-width) - var(--layout-gap))",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "800px",
                    padding: "20px 40px",
                }}
            >
                <Outlet />
            </div>
        </main>
    );
};
