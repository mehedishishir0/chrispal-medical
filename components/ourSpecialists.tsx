"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "./ui/button";

const OurSpecialists = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const data = [
    {
      name: "Dr. Karyna Davis-Irons",
      specialty: "Cardiologist",
      image: "/images/doctor-image.webp",
      bio: "Dr. Johnson has over 15 years of experience in cardiology and specializes in preventive cardiac care.",
    },
    {
      name: "Dr. Alphansus Davis",
      specialty: "Pediatrician",
      image: "/images/doctor-image.webp",
      bio: "Dr. Chen is passionate about children's health and has been practicing pediatrics for 10 years.",
    },
    {
      name: "Dr. Andrew Irons",
      specialty: "Family Medicine",
      image: "/images/doctor-image.webp",
      bio: "Dr. Rodriguez provides comprehensive care for patients of all ages with a focus on preventive medicine.",
    },
    {
      name: "Dr. Karyna Davis-Irons",
      specialty: "Family Medicine",
      image: "/images/doctor-image.webp",
      bio: "Dr. Rodriguez provides comprehensive care for patients of all ages with a focus on preventive medicine.",
    },
  ];

  return (
    <div className="mt-20" id="specialists">
      <div className="container">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-4xl font-semibold text-center">
            Our Specialists
          </h2>
          <p className="text-xl font-medium text-center">
            Meet our team of experienced healthcare professionals dedicated to
            your well-being.
          </p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem className="lg:basis-1/3 md:basis-1/3" key={index}>
                <div className="p-4 flex flex-col gap-3">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-primary font-medium">{item.specialty}</p>
                  <p className="mt-2 text-muted-foreground">{item.bio}</p>
                  <Button className="mt-4 w-full">Book Appointment</Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurSpecialists;
