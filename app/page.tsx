import Goal from "@/components/Goal";
import Grid from "@/components/Grid";
import { Grid2 } from "@/components/Grid2";
import Hero from "@/components/Hero";
import Hours from "@/components/Hours";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Services", link: "#about", icon: <FaHome /> },
            { name: "Goals", link: "#goals", icon: <FaHome /> },
            { name: "Hours", link: "#hours", icon: <FaHome /> },
            { name: "Contact Me", link: "#contact", icon: <FaHome /> },
          ]}
        />
        <Hero />
        <Grid2 />
        {/* <Grid /> */}
        <Goal />
        <Hours />
      </div>
    </main>
  );
}
