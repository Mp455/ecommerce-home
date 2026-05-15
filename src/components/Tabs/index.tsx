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

  inactiveTextColor = "text-neutral-900",
}: TabsProps) {
  return (
    <div
      className={`
        flex items-center 
        overflow-x-auto scrollbar-hide
         pb-2.5
      `}
    >
      {items.map((item) => {
        const isActive = activeTab === item.value;

        return (
          <button
            key={item.value}
            onClick={() => onChange(item.value)}
            className={`
              relative pb-3 text-[16px]
              font-semibold uppercase
              whitespace-nowrap
              tracking-[2%] leading-6 
              px-4 
              ${isActive ? activeTextColor : inactiveTextColor}
            `}
          >
            {item.label}

            <span
              className={`
          absolute bottom-0 left-3
          h-0.75 w-full
          rounded-full
          
          ${isActive ? activeIndicatorColor : "bg-white"}
        `}
            />
          </button>
        );
      })}
    </div>
  );
}
