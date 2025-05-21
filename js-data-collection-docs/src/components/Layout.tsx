import type {FC, ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div
            style={{
                display: "flex",
                gap: "var(--layout-gap)",
                height: "100%",
            }}
        >
            {children}
        </div>
    );
};
