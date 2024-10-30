import Image from "next/image";
import React from "react";

function ServicesDetailed() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-[1400px]">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Import and Export</h2>
        <p className="text-lg text-gray-600 mb-2 md:mb-16 font-semibold">
          At Starline General Trading LLC, we specialize in providing top-notch import and export services. Our expertise ensures smooth, efficient, and reliable handling of all your logistics needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Image
            src="./import.jpg"
            alt="Import Services"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-6">Import Services</h3>
          <p className="mt-4 text-gray-600">
            Our import services are designed to streamline the process of bringing goods into the country. We handle all the complexities, from customs clearance to transportation, ensuring that your products arrive on time and in perfect condition. Our team is experienced in managing diverse products, including perishable goods, electronics, and more.
          </p>
        </div>
        <div>
          <Image
            src="/export.jpg"
            alt="Export Services"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <h3 className="text-2xl font-bold text-gray-800 mt-6">Export Services</h3>
          <p className="mt-4 text-gray-600">
            Our export services make it easy to send your products to international markets. We handle everything from packaging and documentation to logistics and delivery. With our vast network and expertise, we ensure that your goods reach their destination safely and efficiently. Whether you are exporting to Europe, Asia, or the Americas, we&apos;ve got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesDetailed;
