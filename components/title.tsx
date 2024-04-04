type TitleProps = {
  title: string;
  description?: string;
};

export function Title({ title, description }: TitleProps) {
  return (
    <div className="w-full mt-[50px] mb-[50px] text-center">
      <h1 className="max-w-5xl text-center text-4xl mb-[20px] font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
        {title}
      </h1>
      <p className="max-w-5xl text-center text-base font-semibold leading-none tracking-tighter text-neutral-600 md:text-lg lg:text-lg lg:max-w-7xl">
        {description}
      </p>
    </div>
  );
}
