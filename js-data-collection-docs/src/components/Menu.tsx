import {NavLink} from "react-router";
import {MENU} from "../consts/menu.const";
import React from "react";

export const Menu = () => {
    return (
        <menu style={{display: "flex", flexDirection: "column"}}>
            {MENU.map((item) => (
                <React.Fragment key={item.id}>
                    <p style={{marginBottom: "16px"}}>{item.title}</p>
                    {item.links.map((link) => (
                        <NavLink className={"nav-link"} key={link.id} to={link.to} end style={{marginBottom: "8px"}}>
                            {link.title}
                        </NavLink>
                    ))}
                </React.Fragment>
            ))}
        </menu>
    );
};
