import React from "react";
// libs
import Link from "next/link";
// types
import { BannerContent } from "@/app/types";

interface BannerProps {
  bannerData: BannerContent | null;
}

const Banner: React.FC<BannerProps> = ({ bannerData }) => {
  if (!bannerData) {
    return <div>Loading Banner...</div>;
  }
  return (
    <section className="section-slide">
      <div className="wrap-slick1 rs1-slick1">
        <div className="slick1">
          <div
            className="item-slick1"
            style={{ backgroundImage: "url(/images/slide-03.jpg)" }}
          >
            <div className="container h-full">
              <div
                className="flex-col-l-m h-full p-t-100 p-b-30"
                style={{ maxWidth: "600px" }}
              >
                <div className="layer-slick1">
                  <span className="ltext-202 cl2 respon2">
                    {bannerData.preTitle}
                  </span>
                </div>

                <div className="layer-slick1">
                  <h2 className="ltext-104 cl2 p-t-19 p-b-43 respon1">
                    {bannerData.title}
                  </h2>
                </div>

                <div className="layer-slick1">
                  <Link
                    href="/shop"
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
