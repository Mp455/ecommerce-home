import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";

import { categories } from "@/data/categories";

import { CategoryCard } from "./CategoryCard";

import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

export function CategoryCarousel() {
  return (
    <section className="relative ">
      <ArrowLeft className="category-prev" />

      <ArrowRight className="category-next" />

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".category-prev",
          nextEl: ".category-next",
        }}
        slidesPerView={2.11}
        spaceBetween={9.07}
        className="px-4!"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <CategoryCard title={category.title} image={category.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
