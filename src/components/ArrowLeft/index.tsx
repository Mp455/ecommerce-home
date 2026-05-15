import clsx from "clsx";

import ArrowLeftIcon from "@/assets/icon/arrow-left.svg";

type ArrowLeftProps = {
  className?: string;
};

export default function ArrowLeft({ className }: ArrowLeftProps) {
  return (
    <button
      className={clsx(
        `
          absolute left-2 top-1/2 z-20
          flex h-6 w-6 -translate-y-1/2
          cursor-pointer
          items-center justify-center
          rounded-full bg-white
          shadow-md
        `,
        className,
      )}
    >
      <img
        src={ArrowLeftIcon}
        alt="Previous"
        className="h-[12.71px] w-[9.57px]"
      />
    </button>
  );
}
