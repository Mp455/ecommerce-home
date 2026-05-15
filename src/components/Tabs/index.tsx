type TabItem = {
  label: string;
  value: string;
};

type TabsProps = {
  items: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
  activeTextColor?: string;
  activeIndicatorColor?: string;
  inactiveTextColor?: string;
};

export function Tabs({
  items,
  activeTab,
  onChange,

  activeTextColor = "text-primary-red-700",

  activeIndicatorColor = "bg-primary-red-700",

  inactiveTextColor = "text-neutral-900 font-normal",
}: TabsProps) {
  return (
    <div
      className={`
        flex items-center 
        overflow-x-auto scrollbar-hide
         pb-2.5 px-4 rounded-full
      `}
    >
      {items.map((item, index) => {
        const isActive = activeTab === item.value;
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`
              relative pb-3 text-[16px] uppercase
              whitespace-nowrap
              tracking-[2%] leading-6
              px-4 
              ${isActive ? `${activeTextColor} font-semibold` : inactiveTextColor}
            `}
          >
            {item.label}

            <div
              className={`h-0.75 w-full
              absolute bottom-0 inset-x-0 ]
              ${isFirst ? "rounded-l-full" : ""}
              ${isLast ? "rounded-r-full" : ""}
              ${isActive ? "bg-white" : ""}
              `}
            >
              <span
                className={`w-full block h-full
              ${isFirst ? "rounded-l-full" : ""}
              ${isLast ? "rounded-r-full" : ""}
              ${isActive ? `${activeIndicatorColor} rounded-full font-semibold` : "bg-white"}`}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
