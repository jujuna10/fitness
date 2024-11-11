import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Programs from "@/components/Progrmas";
import Prices from "@/components/Prices";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <Features />
      <Programs />
      <Prices />
    </div>
  );
}
