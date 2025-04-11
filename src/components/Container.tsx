function Container({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <div
      id={id}
      className="mx-auto px-4 py-8 sm:max-w-2xl sm:py-12 md:max-w-3xl md:py-16 lg:max-w-4xl lg:py-20 xl:max-w-5xl xl:py-28 2xl:py-32"
    >
      {children}
    </div>
  );
}

export default Container;
