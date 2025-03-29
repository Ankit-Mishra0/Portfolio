import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/navBar";
import About from "./components/About";
import EmailSection from "./components/EmailSection";
import Footer from "./components/footer";
import ProjectSection from "./components/projectSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
      <div className="container mx-auto px-12 py-4 mt-25">
        <HeroSection />
        <About/>
        <ProjectSection/>
        <EmailSection/>
      
      </div>
      <Footer/>
      

    </main>
  );
}
