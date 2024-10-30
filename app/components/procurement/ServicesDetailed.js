import Image from "next/image";
import React from "react";

function ServicesDetailed() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Procurement and Outsourcing
        </h2>
         <p className="text-lg text-gray-600 md:mb-16 font-semibold">
          At Starline General Trading LLC, we specialize in delivering
          top-notch procurement services. Our expertise ensures smooth,
          efficient, and reliable handling of all your sourcing and acquisition
          needs.
        </p>
      </div>
      <div className="grid gap-16 items-center">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <h3 className="text-2xl font-bold text-gray-800 mt-6"></h3>
          <div>
            <p className="mt-4 text-gray-600 md:w-[600px]">
              Our procurement and outsourcing services streamline your sourcing
              and acquisition processes. We manage everything from supplier
              selection and contract negotiation to quality control and
              delivery.
            </p>
            <p>
              <br />
              With our extensive network and expertise, we ensure that you
              receive the best materials and services at the best prices,
              delivered on time. Whether you're sourcing locally or
              internationally, we've got you covered.
            </p>
            <p>
              <br />
              We enable you to concentrate on your core competencies while we
              handle the intricate details of procurement and outsourcing,
              ensuring seamless operations and smooth transitions. By partnering
              with us, you gain a strategic advantage that allows you to stay
              ahead of the curve and drive sustainable growth.
            </p>
          </div>
          <Image
            src="/export.jpg"
            alt="Export Services"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesDetailed;
