import React from "react";
import ImageBanner from "../section/DentalIT/ImageBanner";
import WhatWeDo from "../section/DentalIT/WhatWeDo";
import TabSwitch from "../section/DentalIT/TabSwitch";
import Connect from "../section/DentalIT/Connect";

const DentalIT = () => {
  return (
    <div className="px-6 py-10">
      <ImageBanner />
      <WhatWeDo />
      <TabSwitch />
      <Connect />
    </div>
  );
};

export default DentalIT;
