import {NavLink} from "react-router";
import {MENU} from "../consts/menu.const";

export const Menu = () => {
    return (
        <menu style={{display: "flex", flexDirection: "column"}}>
            {MENU.map((item) => (
                <section key={item.id} style={{marginBottom: "24px", display: "flex", flexDirection: "column"}}>
                    <p style={{marginBottom: "16px"}}>{item.title}</p>
                    {item.links.map((link) => (
                        <NavLink className={"nav-link"} key={link.id} to={link.to} end style={{marginBottom: "8px"}}>
                            {link.title}
                        </NavLink>
                    ))}
                </section>
            ))}
        </menu>
    );
};
