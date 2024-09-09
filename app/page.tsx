import Footer from "@/components/Footer";
// import Goal from "@/components/Goal";
import { Goals } from "@/components/Goals";
// import Grid from "@/components/Grid";
import { Grid2 } from "@/components/Grid2";
import Hero from "@/components/Hero";
import Hours from "@/components/Hours";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { LuGoal, LuPhone, LuWrench } from "react-icons/lu";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Services", link: "#about", icon: <LuWrench /> },
            { name: "Goals", link: "#goals", icon: <LuGoal /> },
            { name: "Hours/Contact", link: "#hours", icon: <LuPhone /> },
          ]}
        />
        <Hero />
        <Goals />
        <Grid2 />
        {/* <Grid /> */}
        {/* <Goal /> */}
        <Hours />
        <Footer />
      </div>
    </main>
  );
}
