import clsx from "clsx";

type BottomNavigationItemProps = {
  icon: string;

  label: string;

  active?: boolean;
};

export function BottomNavigationItem({
  icon,
  label,
  active = false,
}: BottomNavigationItemProps) {
  return (
    <button
      className="
        flex flex-col items-center
        justify-center gap-1 mb-3
      "
    >
      <img
        src={icon}
        alt={label}
        className={clsx(
          "h-5 w-5 mb-1",
          active && "opacity-100",
          !active && "opacity-50",
        )}
      />
    </button>
  );
}
