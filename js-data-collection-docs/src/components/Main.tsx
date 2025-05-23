import {Outlet} from "react-router";

export const Main = () => {
    return (
        <main
            style={{
                width: "calc(100% - var(--sidebar-width) - var(--layout-gap))",
                display: "flex",
                justifyContent: "center",
                overflowY: "scroll",
            }}
        >
            <div
                style={{
                    width: "1000px",
                    padding: "20px 40px",
                    height: "max-content",
                }}
            >
                <Outlet />
            </div>
        </main>
    );
};
