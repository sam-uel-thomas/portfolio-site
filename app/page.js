"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollTag from "./components/ScrollTag";
import { useEffect, useState, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const landingRef = useRef(null);

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const landingHeight = landingRef.current.offsetHeight;

            if (scrollPosition <= landingHeight) {
                const opacity = 1 - scrollPosition / (2 * landingHeight);
                landingRef.current.style.opacity = opacity;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <main className="flex flex-col scroll-behavior[smooth]">                 
                <div ref={landingRef} id="landing" className="section bg-[#0E0E0C]" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    <HeroSection />
                    <ScrollTag />
                </div> 
                <div id="about" className="section bg-[#E8E8E8] font-sans font-bold rounded-t-3xl overflow-hidden shadow-lg z-20" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    <About />
                </div>
                <div id="projects" className="section bg-[#E8E8E8] font-sans font-bold rounded-b-3xl overflow-hidden z-20" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    <Projects />
                </div>
                <div id="contact" className="section bg-[#0E0E0C] font-sans font-bold z-10" style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}>
                    <Contact />
                </div>
            </main>
        </>
    );
}