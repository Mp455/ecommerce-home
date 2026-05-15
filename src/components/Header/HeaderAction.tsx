import ShoppingBagIcon from "@/assets/icon/shopping-bag-icon.svg";

export function HeaderActions() {
  return (
    <button className="relative flex h-10 items-center justify-center">
      <img src={ShoppingBagIcon} alt="Shopping Bag Icon" className="w-5 h-5" />

      <span
        className="
          absolute
          left-2.75
          top-2
          flex
          h-3.25
          w-3.25
          items-center
          justify-center
          rounded-full
          bg-primary-red-700
          text-[10px]
          text-white
          tracking-[2%]
          leading-5.5
        "
      >
        1
      </span>
    </button>
  );
}
