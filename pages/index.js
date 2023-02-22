import About from "@/components/About";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Schedule from "@/components/Schedule";
import Services from "@/components/Services";
import Trainers from "@/components/Trainers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Classes />
        <Schedule />
        <Trainers />
        <Services />
        <Contact />
      </main>
    </>
  );
}
