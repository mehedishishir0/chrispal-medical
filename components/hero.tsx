import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative mb-36" id="/">
      <div>
        <div className="absolute inset-0 z-1 ">
          <Image
            src="/images/heroimage.png"
            alt="Healthcare professionals"
            width={1920}
            height={1080}
            className="object-center brightness-[0.7] w-full h-[80vh]"
            priority
          />
        </div>
        <div className="container relative z-10 flex flex-col items-center  justify-center py-24 md:py-32 lg:py-40 text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Your Health, Our Priority
          </h1>
          <p className="mt-4 max-w-[700px] text-lg md:text-xl text-white/90">
            Providing exceptional healthcare services with compassion and
            expertise for over 20 years.
          </p>
          <Button size="lg" className="mt-8">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
