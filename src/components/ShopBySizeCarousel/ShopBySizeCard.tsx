type ShopBySizeCardProps = {
  size: number;
};

export function ShopBySizeCard({ size }: ShopBySizeCardProps) {
  return (
    <div className="flex flex-col">
      <span className=" text-center flex items-center w-[58.92px] justify-center  border-2 h-[58.92px] border-primary-red-700 rounded-[41.36px] ">
        <h2 className="text-primary-red-900 text-2xl">{size}</h2>
      </span>
    </div>
  );
}
