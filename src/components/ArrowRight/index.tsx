import ArrowRightIcon from "@/assets/icon/arrow-right.svg";
import clsx from "clsx";

type ArrowRightProps = {
  className?: string;
};

export default function ArrowRight({ className }: ArrowRightProps) {
  return (
    <button
      className={clsx(
        `
          absolute right-2 top-1/2 z-20
          flex h-6 w-6 -translate-y-1/2
          cursor-pointer
          items-center justify-center
          rounded-full bg-white
          shadow-md
        `,
        className,
      )}
    >
      <img src={ArrowRightIcon} alt="Next" className="h-[12.71px] w-[9.57px]" />
    </button>
  );
}
