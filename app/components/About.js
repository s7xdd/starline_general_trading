import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="flex flex-col mt-10 md:flex-row bg-white text-black py-12 px-6 md:px-16">
      <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <Image
          src="/warehouse.jpg"
          alt="Warehouse"
          width={650}
          height={200}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">A Global Leader in General Trading</h2>
        <p className="text-sm sm:text-base mb-8 mt-5">
          Starline is a renowned general trading Dubai company, procurement,
          and supply specialist with vast financial and credit prowess.
          <br />
          <br />
          We deal with a wide range of merchandise across various sectors
          including ecommerce, clothing, and agriculture. We also boast
          robust relationships with leading suppliers in the world.
          <br />
          <br />
          Additionally, Starline specializes in multisector procurement and
          supply, offering one-stop solutions to clients across the globe. We
          supply raw material, equipment, and machinery for construction,
          healthcare, transportation, mining, municipal, production &
          manufacturing, industrial, energy, and more.
        </p>
        <p>
          General trading specialists at Starline offer customized solutions
          to help customer with their needs to ensure good and products can be
          accessed on credit terms to match their operation cycles. We serve our
          customers from our head office in Dubai, UAE, approaching each client with an aim to create
          and nurture solid and sustainable relationships built on common values
          of consistency and trust.
        </p>
      </div>
    </section>
  );
}

export default About;
