"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import {RecentProjects} from "@/components/RecentProjects";
import { Header } from "@/components/header";



const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center w-screen items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-screen">
       
    
        <Hero />
     
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
