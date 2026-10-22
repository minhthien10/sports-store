import React from "react";

const SectionTitle = ({ title, mb, className = "" }) => {
  const margin = mb || "mb-0";
  return (
    <div>
      <h3
        className={`text-2xl md:text-3xl text-[#1D3B29] font-bold font-inter capitalize ${margin} ${className}`}
      >
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
