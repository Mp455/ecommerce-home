import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";

import { partnerBrands } from "@/data/partner-brands";

import { PartnerBrandsCard } from "./PartnerBrandsCard";

export function PartnerBrandsCarousel() {
  return (
    <section className="relative px-4 pt-[40.8px]">
      <Swiper modules={[Navigation]} slidesPerView={2.25} spaceBetween={9}>
        {partnerBrands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <PartnerBrandsCard title={brand.fallback} image={brand.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
