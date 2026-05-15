type CategoryCardProps = {
  title: string;
  image: string;
};

export function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="h-59.5 min-w-[163.2px] object-cover"
      />

      <div className="absolute bottom-4.5 left-3.5">
        <span
          className="
            rounded-full bg-white
            px-[14.22px] py-[5.71px]
            text-[14px] font-semibold
            text-primary-red-700
          "
        >
          {title}
        </span>
      </div>
    </div>
  );
}
