interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-5">
      <div className="col-span-10 col-start-2">
        {children}
      </div>
    </div>
  );
}