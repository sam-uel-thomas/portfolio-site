import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ScrollTag from "./components/ScrollTag";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col style={{ minHeight: 'calc(100vh - 108px)' }">
                <div id="landing" className="section bg-[#0E0E0C]" style={{ minHeight: 'calc(100vh - 108px)' }}>
                    <HeroSection />
                    <ScrollTag />
                </div> 
                <div id="projects" className="section bg-[#FFFFFF] text-[#0E0E0C] font-sans font-bold" style={{ minHeight: 'calc(100vh - 108px)' }}>
                    Projects
                </div>
                <div id="about" className="section bg-[#0E0E0C] text-[#FFFFFF] font-sans font-bold" style={{ minHeight: 'calc(100vh - 108px)' }}>
                    About
                </div>
                <div id="contact" className="section bg-[#FFFFFF] text-[#0E0E0C] font-sans font-bold" style={{ minHeight: 'calc(100vh - 108px)' }}>
                    Contact
                </div>
            </main>
        </>
    );
}