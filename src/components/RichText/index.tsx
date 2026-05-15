import clsx from "clsx";

type RichTextProps = {
  children: React.ReactNode;
  className?: string;
};

export function RichText({ children, className }: RichTextProps) {
  return (
    <div
      className={clsx(
        `
          text-base leading-7 text-text
          
          [&_h1]:text-4xl
          [&_h1]:font-black
          [&_h1]:leading-tight
          
          [&_h2]:text-xl
          [&_h2]:font-semibold
          [&_h2]:leading-tight
          
          [&_h3]:text-2xl
          [&_h3]:font-bold
          
          [&_strong]:font-bold
          
          [&_ul]:list-disc
          [&_ul]:pl-6
          
          [&_ol]:list-decimal
          [&_ol]:pl-6
          
          [&_li]:mb-2
          
          [&_a]:text-primary-red-700
          [&_a]:underline
          
          [&_blockquote]:border-l-4
          [&_blockquote]:border-primary-red-700
          [&_blockquote]:pl-4
          [&_blockquote]:italic
          
          [&_img]:rounded-2xl
          
          [&>*:first-child]:mt-0
          [&>*:last-child]:mb-0
          
          space-y-4
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
