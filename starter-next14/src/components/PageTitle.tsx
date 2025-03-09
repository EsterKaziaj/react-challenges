import React from "react";
// types
import { PageTitleProps } from "@/app/types";

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  if (!title) {
    return <div>Loading Title...</div>;
  }

  return (
    <section
      className="bg-img1 txt-center p-lr-15 p-tb-92"
      style={{ backgroundImage: "url('/images/bg-01.jpg')" }}
    >
      <h2 className="ltext-105 cl0 txt-center">{title}</h2>
    </section>
  );
};

export default PageTitle;
