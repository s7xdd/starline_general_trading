import WhyChoose from "@/app/components/WhyChoose";
import React from "react";
import ServicesDetailed from "@/app/components/procurement/ServicesDetailed";
import ProcurementServices from "@/app/components/procurement/ServicesPoints.js/ServicePoints";
import Quote from "@/app/components/Quote";

function page() {
  return (
    <div>
      <div className="flex justify-center">
        <ServicesDetailed/>
      </div>
      <div className="flex justify-center">
        <ProcurementServices/>
      </div>
      <div className="mt-10">
        <WhyChoose />
        <Quote/>
      </div>
    </div>
  );
}

export default page;
