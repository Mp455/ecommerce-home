import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        `
          flex items-center justify-center
          rounded-full
          bg-primary-red-700
          text-white
        `,
        className,
      )}
    >
      {children}
    </span>
  );
}
