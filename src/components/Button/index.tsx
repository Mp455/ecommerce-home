import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;

  className?: string;

  variant?: ButtonVariant;

  size?: ButtonSize;
};

const variants = {
  primary: `
    bg-primary-red-700
    text-white
    hover:opacity-90
  `,

  outline: `
    border border-primary-red-700
    bg-transparent
    text-primary-red-700
    hover:bg-primary-red-700
    hover:text-white
  `,

  ghost: `
    bg-transparent
    text-primary-red-700
    hover:bg-primary-red-700/10
  `,
};

const sizes = {
  sm: `
    h-[25.65px] w-full px-[9.05px]
    text-[10.56px]
    whitespace-nowrap
  `,

  md: `
    h-8.5 px-6 w-50
    leading-4.5 text-[14px] tracking-[2%]
  `,

  lg: `
    h-12 px-8
    text-lg
  `,
};

export function Button({
  children,
  className,

  variant = "primary",

  size = "md",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        `
          flex items-center justify-center
          rounded-full
          font-bold
          transition-all duration-300
          active:scale-95
          cursor-pointer
        `,
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </button>
  );
}
