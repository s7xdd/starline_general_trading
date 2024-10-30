import Image from "next/image";
import React from "react";

function ServicesDetailed() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Logistics and Shipping
        </h2>
        <p className="text-lg text-gray-600 mb-16 font-semibold">
          At Starline General Trading LLC, we specialize in providing top-notch
          Logistics and Shipping services. Our expertise ensures smooth,
          efficient, and reliable handling of all your online business
        </p>
      </div>
      <div className="grid gap-16 items-center">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/export.jpg"
            alt="Export Services"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-6"></h3>
          <div>
            <p>
              We are renowned for our capability and novelty to always reinvent
              operations with seasons, and so we have curved our own niche in
              the e-commerce business.
              <br />
              <br />
              We manage ECommerce platforms for both our in-house products and
              external brands of the Middle East, Europe, Africa, Asia, and
              North America to directly service customers and bridging the gap
              in the e-commerce market.
              <br />
              <br />
              Whether it is our in-house products or goods from our esteemed
              partners, Starline is strategically prepared to ensure the
              utmost quality of products and even distribution to customers, in
              a seamless, affordable, and safer fashion. 
              <br />
              <br />
              Warehousing,
              distribution, and ECommerce solutions- Starline General Trading
              Dubai company is capable of navigating through the challenges of
              this sensitive sector. Whether you source your products from
              Africa, Europe, GCC, or Asia, Traderston boasts solid
              infrastructure and capabilities to manage any kind of logistics
              complexities. 
              <br />
              <br />
              Our end-to-end e-commerce solutions comprise
              everything from global distribution, e-commerce warehousing,
              e-commerce shipping, and freight forwarding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetailed;
