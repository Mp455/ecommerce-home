type PartnerBrandsCardProps = {
  title: string;
  image: string;
};

export function PartnerBrandsCard({ title, image }: PartnerBrandsCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src={image}
        alt={title}
        className="h-53.25 w-full min-w-[154.52px] object-cover"
      />
    </div>
  );
}
