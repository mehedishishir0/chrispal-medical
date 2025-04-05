import About from "@/components/about";
import Hero from "@/components/hero";
import Ourlocation from "@/components/location";
import Ourservices from "@/components/ourServices";
import OurSpecialists from "@/components/ourSpecialists";
import PatientTestimonials from "@/components/patientTestimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-10">
      <Hero />
      <About />
      <Ourservices />
      <OurSpecialists />
      <PatientTestimonials />
      <Ourlocation/>
    </div>
  );
}
