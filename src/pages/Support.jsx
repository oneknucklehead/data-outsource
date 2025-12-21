import React from "react";
import ImageCard from "../components/ImageCard";
import { SupportBanner } from "../section/Support/SupportBanner";
import SupportTags from "../section/Support/SupportTags";
import Connect from "../section/Connect";

const Support = () => {
  return (
    <div className="px-6 py-10">
      <SupportBanner />
      <SupportTags />
      <Connect />
      <ImageCard />
    </div>
  );
};

export default Support;
