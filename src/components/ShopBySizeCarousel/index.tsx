import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

import "swiper/css";
import { ShopBySizeCard } from "./ShopBySizeCard";
import { shopyBySize } from "@/data/shopy-by-size";

export default function ShopBySizeCarousel() {
  return (
    <section className="relative">
      <ArrowLeft className="shop-by-size-prev" />

      <ArrowRight className="shop-by-size-next" />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".shop-by-size-prev",
          nextEl: ".shop-by-size-next",
        }}
        slidesPerView={4}
        spaceBetween={12}
        className="w-[274.93px]"
      >
        {shopyBySize.map((size) => (
          <SwiperSlide key={size.id}>
            <ShopBySizeCard size={size.size} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
