import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="font-Noto text-slate-200 bg-[conic-gradient(var(--tw-gradient-stops))] bg-gradient-to-tr from-amber-400 to-yellow-900  flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto mt-20 px-12  py-4">
        <Header />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
