import { HighlightSession } from "@/components/HighlightSession";
import { Header } from "../../components/Header";
import { FirstPurchaseDiscount } from "@/components/FirstPurchaseDiscount";
import { RichText } from "@/components/RichText";
import { CategoryCarousel } from "@/components/CategoryCarousel";

import ShopBySizeCarousel from "@/components/ShopBySizeCarousel";
import { PartnerBrandsCarousel } from "@/components/PartnerBrandsCarousel";

import { ProductsSection } from "@/components/ProductSession";
import { Tabs } from "@/components/Tabs";
import { useState } from "react";
import { categoriesTabs } from "@/utils/categories-tabs";
import { brandsTabs } from "@/utils/brands";

import { productsByCategory } from "@/data/products-by-category";
import { productsByBrands } from "@/data/products-by-brands";

import MizunoSection2 from "@/assets/images/mizuno-section-2.svg";
import MizunoSection3 from "@/assets/images/mizuno-section-3.svg";
import { BottomNavigation } from "@/components/BottomNavigation";

export function HomePage() {
  const [activeCategoryTab, setActiveCategoryTab] = useState("masculino");
  const [activeBrandTab, setActiveBrandTab] = useState("mizuno");
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white overflow-x-hidden pb-21.5">
        <HighlightSession />

        <FirstPurchaseDiscount />

        <div className="bg-neutral-gray-100">
          <RichText className="py-8 pl-4">
            <h2 className="uppercase tracking-[2%] leading-6">
              Nossos produtos
            </h2>
          </RichText>

          <CategoryCarousel />

          <RichText className="pt-8 pb-5">
            <h2 className="uppercase tracking-[2%] leading-6 text-center">
              Compre por tamanho
            </h2>
          </RichText>

          <ShopBySizeCarousel />

          <PartnerBrandsCarousel />

          <div className="pt-12.75">
            <Tabs
              items={categoriesTabs}
              activeTab={activeCategoryTab}
              onChange={setActiveCategoryTab}
            />
          </div>
        </div>

        <div className="px-4">
          <ProductsSection
            activeTab={activeCategoryTab}
            filterBy="category"
            products={productsByCategory}
            withSwiper
            slidesPerView={2}
            spaceBetween={14}
          />
        </div>

        <div className="bg-linear-to-r from-[#E23D58] to-[#C8102E] pb-9.5 mt-[35.27px]">
          <RichText className="pt-10 pl-4 pb-6">
            <p className="uppercase tracking-[2%] leading-7 text-white font-semibold text-2xl">
              NOSSAS MARCAS
            </p>
          </RichText>

          <Tabs
            items={brandsTabs}
            activeTab={activeBrandTab}
            onChange={setActiveBrandTab}
            activeTextColor="text-white"
            inactiveTextColor="text-white/80"
            activeIndicatorColor="bg-black"
          />

          <div className="flex justify-center px-4 items-center mt-8.5 rounded-3xl">
            <img
              src={MizunoSection2}
              alt="Mizuno Section 2"
              width={343}
              height={296}
              className="w-full"
            />
          </div>

          <div className="pl-4">
            <ProductsSection
              activeTab={activeBrandTab}
              filterBy="brand"
              products={productsByBrands}
              withSwiper
              slidesPerView={1.55}
              spaceBetween={14}
              cardWidth="w-[224px]"
              cardHeight="h-[445px]"
              variant="custom"
            />
          </div>
        </div>

        <RichText className="pt-8.75 px-4">
          <h2 className="uppercase tracking-[2%] leading-6">Novidades</h2>
        </RichText>

        <div className="pl-4">
          <ProductsSection
            activeTab={activeBrandTab}
            filterBy="brand"
            products={productsByBrands}
            withSwiper
            slidesPerView={1.55}
            spaceBetween={14}
            cardWidth="w-[224px]"
            cardHeight="h-[445px]"
            variant="custom"
          />
        </div>

        <div className="flex justify-center px-4 items-center mt-9.25 rounded-3xl pb-8">
          <img
            src={MizunoSection3}
            alt="Mizuno Section 2"
            width={342}
            height={431}
            className="w-full"
          />
        </div>
      </main>
      <BottomNavigation />
    </>
  );
}
