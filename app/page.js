import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#0E0E0C]">
			<div>
				<Navbar />
			</div>
		</main>
 	);
}
