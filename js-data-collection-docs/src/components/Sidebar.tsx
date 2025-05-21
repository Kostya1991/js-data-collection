import type {FC, ReactNode} from "react";

interface SidebarProps {
    children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({children}) => {
    return (
        <div
            style={{
                width: "var(--sidebar-width)",
                padding: "10px",
                borderRight: "1px solid #727E8A",
            }}
        >
            {children}
        </div>
    );
};
