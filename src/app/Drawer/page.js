'use client'
import React from "react";
import Link from "next/link";



import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";


export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent style={{ color: "black" }}>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem>
                    <div style={{ color: "black" }}>
                        <div>Profile</div>
                        <div>Profile</div>
                        <div>Profile</div>
                        <div>Profile</div>
                        <div>Profile</div>
                        <div>Profile</div>
                        <div>Profile</div>
                    </div>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
