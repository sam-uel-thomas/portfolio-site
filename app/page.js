"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollTag from "./components/ScrollTag";
import { useEffect, useState } from "react";

export default function Home() {
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const navigation = document.querySelector(".primary-navigation");

        if (navigation) {
            const navigationHeight = navigation.offsetHeight;
            setNavbarHeight(navigationHeight);

            document.documentElement.style.setProperty(
                "--scroll-padding",
                `${navigationHeight}px`
            );
        }
    }, []);

    return (
        <>
            <Navbar />
            <main className="flex flex-col">                 
                <div id="landing" className="section bg-[#0E0E0C]" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    <HeroSection />
                    <ScrollTag />
                </div> 
                <div id="projects" className="section bg-[#FFFFFF] text-[#0E0E0C] font-sans font-bold" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    Projects
                </div>
                <div id="about" className="section bg-[#0E0E0C] text-[#FFFFFF] font-sans font-bold" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    About
                </div>
                <div id="contact" className="section bg-[#FFFFFF] text-[#0E0E0C] font-sans font-bold" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    Contact
                </div>
            </main>
        </>
    );
}