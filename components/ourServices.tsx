import {
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  Mail,
  Phone,
  Star,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Ourservices = () => {
  const data = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced diagnostic and treatment options.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Primary Care",
      description:
        "Regular check-ups and preventive care for patients of all ages.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Pediatrics",
      description:
        "Specialized healthcare for infants, children, and adolescents.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical conditions.",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Telemedicine",
      description: "Virtual consultations with our healthcare professionals.",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Lab Services",
      description: "Comprehensive diagnostic testing and laboratory services.",
    },
  ];
  return (
    <div>
      <div className="container" id="services">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-4xl font-semibold text-center">Our Services</h2>
          <p className="text-xl font-medium text-center">
            We offer a comprehensive range of medical services to meet all your
            healthcare needs.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-transform duration-300 hover:scale-105 group"
            >
              <div className="pointer-events-none absolute inset-0 z-0 
    before:content-[''] before:absolute before:top-1/2 before:left-1/2 
    before:-translate-x-1/2 before:-translate-y-1/2 before:w-0 before:h-0 
    before:rounded-full 
    before:bg-[radial-gradient(rgba(59,130,246,0.3)_0%,transparent_70%)] 
    before:transition-all before:duration-500 
    group-hover:before:w-[200%] group-hover:before:h-[200%]"></div>

              <CardContent className="relative z-10 p-6 flex flex-col gap-2 cursor-pointer">
                <div className="mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-center">
                  {service.title}
                </h3>
                <p className="mt-2 text-center text-muted-foreground">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="mt-4 p-0 h-auto justify-center flex"
                  asChild
                >
                  <Link href="#" className="flex items-center">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
