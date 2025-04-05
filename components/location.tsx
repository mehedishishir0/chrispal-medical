import React from "react";

const Ourlocation = () => {
  return (
    <div className="mt-20" id="contact">
      <div className="container text-[#663366]">
        <div className="mt-4 ">
          <h3 className="text-center text-2xl font-bold">Our Location</h3>
        </div>
        <div className="mt-10">
          <p>
            A group of talented professionals (born and grown in the community)
            have identified a need for comprehensive health care in the
            community. We have identified a way to offer a complete medical
            package to the people in our community by providing a “one stop
            shop” affordable medical service to people in Christiana, Spalding
            and surrounding communities.
            <br />
            <br />
            We aim to serve the communities through exceptional, affordable
            health care, as we prevent illnesses, restore health, and provide
            comfort to all who entrust us with their care. We will bring the
            specialists to the community saving patients time and money.
            <br />
            <br />
            It is our aim to employ as many persons from the community as
            possible and provide training/scholarships to those who qualify and
            are eager to join our team.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="font-semibold text-xl">LOCATION</h3>
          <iframe
            className="rounded-2xl mt-4 w-full md:h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14215.361790154675!2d-93.14939949814328!3d45.011016850887074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32bb59e6484f9%3A0x4e8942b9d81d11c1!2sChristina%20Clinic!5e0!3m2!1sbn!2sbd!4v1743844462216!5m2!1sbn!2sbd"
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-10 container">
          <h3 className="text-xl font-semibold mb-10">
            SOME OF THE SERVICES TO BE OFFERED INCLUDE
          </h3>
          <ul className="list-disc flex flex-col gap-4">
            <li>Family Medicine/General Practitioner</li>
            <li>
              Specialists- General surgery, orthopedics, obstetrics/gynaecology,
              paediatrician, pain specialist etc.
            </li>
            <li>Pharmacy</li>
            <li>Radiology- X ray, Ultrasound etc.</li>
            <li>Laboratory</li>
            <li>Ambulance service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ourlocation;
