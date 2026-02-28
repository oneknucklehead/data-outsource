import React, { useState } from "react";
import ImageCard from "../components/ImageCard";
import { SupportBanner } from "../section/Support/SupportBanner";
import SupportTags from "../section/Support/SupportTags";
import Connect from "../section/Connect";

const Support = () => {
  const [selectedSubject, setSelectedSubject] = useState("Email Issues");

  return (
    <div className="px-6 py-10">
      <SupportBanner />
      <SupportTags setSelectedSubject={setSelectedSubject} />
      <Connect selectedSubject={selectedSubject} />
      <ImageCard />
    </div>
  );
};

export default Support;
