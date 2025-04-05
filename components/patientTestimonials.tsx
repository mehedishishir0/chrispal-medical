"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const PatientTestimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const data = [
    {
      name: "John Smith",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The care I received was exceptional. The doctors and staff were attentive, knowledgeable, and compassionate.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "I've been a patient for over 5 years and have always had positive experiences. The facility is clean and modern.",
      rating: 3,
    },
    {
      name: "Robert Johnson",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The telemedicine service has been a game-changer for me. I can consult with my doctor without leaving home.",
      rating: 4,
    },
    {
      name: "Robert Johnson",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The telemedicine service has been a game-changer for me. I can consult with my doctor without leaving home.",
      rating: 4,
    },
    {
      name: "Robert Johnson",
      image: "/placeholder.svg?height=100&width=100",
      testimonial:
        "The telemedicine service has been a game-changer for me. I can consult with my doctor without leaving home.",
      rating: 5,
    },
  ];

  return (
   <div className="mt-20" id="testimonials">
     <div className="container">
      <div className="flex flex-col gap-3 mb-20 ">
        <h2 className="text-4xl font-semibold text-center">
          Patient Testimonials
        </h2>
        <p className="text-xl font-medium text-center">
          Hear what our patients have to say about their experience with our
          healthcare services.
        </p>
      </div>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {data.map((testimonial, index) => (
            <CarouselItem className="lg:basis-1/3 md:basis-1/2"  key={index}>
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="flex">
                        {Array(testimonial.rating)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-primary text-primary"
                            />
                          ))}
                        {Array(5 - testimonial.rating)
                          .fill(null)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-muted-foreground"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {testimonial.testimonial}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
   </div>
  );
};

export default PatientTestimonials;
