import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ProductCard } from "../ProductCard.tsx";

interface Product {
  id: number;
  image: string;
  title: string;
  brand: string;
  discount: string;
  oldPrice: string;
  price: string;
  clubPrice: string;
  installment: string;
}

interface ProductsSectionProps {
  products: Product[];
  activeTab: string;
  filterBy: string;
  withSwiper?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  cardWidth?: string;
  cardHeight?: string;
  variant?: "default" | "custom";
}

export function ProductsSection({
  products,
  activeTab,
  filterBy,
  withSwiper = false,
  slidesPerView = 2.25,
  spaceBetween = 9.07,
  cardWidth,
  cardHeight,
  variant = "default",
}: ProductsSectionProps) {
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) => product[filterBy as keyof Product] === activeTab,
    );
  }, [activeTab, filterBy, products]);

  if (withSwiper) {
    return (
      <section className="mt-4">
        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          className="px-4"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                {...product}
                buttonName="Comprar Agora"
                width={cardWidth}
                height={cardHeight}
                variant={variant}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  return (
    <section className="mt-4">
      <div className=" grid grid-cols-2 gap-3.5 px-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            buttonName="Comprar Agora"
            width={cardWidth}
          />
        ))}
      </div>
    </section>
  );
}
