import { Badge } from "../Badge";
import { Button } from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { slides } from "@/data/slides";

export function HighlightSession() {
  return (
    <section className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".highlight-pagination",
          bulletClass: "highlight-bullet",
          bulletActiveClass: "highlight-bullet-active",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={slide.image}
                alt="Highlight Session Banner"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute bottom-16 left-1/2
                  flex w-full -translate-x-1/2
                  flex-col items-center gap-[11.36px] max-w-70
                "
              >
                <div className="flex flex-col gap-1">
                  <div className="self-start flex items-center gap-[7.77px]">
                    <span className="text-[18.34px] text-white line-through tracking-[4%]">
                      {slide.oldPrice}
                    </span>
                    <Badge className="w-[61.91px] h-[19.87px] text-[10.7px] tracking-[2%] font-semibold leading-[21.4px]">
                      {slide.discount}
                    </Badge>
                  </div>

                  <h2
                    className="
                    text-[55.03px] font-black
                    leading-[37.3px] text-white tracking-[2%] whitespace-nowrap
                  "
                  >
                    {slide.price}
                  </h2>
                </div>

                <div className="mt-[15.77px] mb-2">
                  <Button
                    className="w-[114.98px] h-8 rounded-[84.35px] px-[26.99px] py-[13.5px] leading-[20.2px] tracking-[2%] font-semibold text-[13.5px]"
                    size="md"
                  >
                    CONFIRA
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Paginação FORA do Swiper, fixo e centralizado */}
      <div className="highlight-pagination absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex gap-2" />

      <style>{`
        .highlight-pagination {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 4px;
          position: absolute !important;
          bottom: 35px !important;
          left: 53.9% !important;
          transform: translateX(-50%) !important;
          z-index: 10 !important;
          width: auto !important;
        }
        .highlight-bullet {
          width: 8px !important;
          height: 8px !important;
          border-radius: 9999px !important;
          background: #FFF !important;
          display: inline-block !important;
          cursor: pointer !important;
          transition: background 0.3s !important;
          opacity: 1 !important;
          margin: 0 !important;
        }
        .highlight-bullet-active {
          background: #C8102E !important;
        }
      `}</style>
    </section>
  );
}
