import WhyChoose from "@/app/components/WhyChoose";
import React from "react";
import ServicesDetailed from "@/app/components/ecommerce/ServicesDetailed";
import Quote from "@/app/components/Quote";
import EcommerceServices from "@/app/components/ecommerce/ServicesPoints.js/ServicePoints";

function page() {
  return (
    <div>
      <div className="flex justify-center">
        <ServicesDetailed/>
      </div>
      <div className="flex justify-center">
        <EcommerceServices/>
      </div>
      <div className="mt-10">
        <WhyChoose />
        <Quote/>
      </div>
    </div>
  );
}

export default page;
