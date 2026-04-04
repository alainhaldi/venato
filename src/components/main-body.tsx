type MainBodyProps = {
  children: React.ReactNode;
};

const MainBody = ({ children }: MainBodyProps) => {
  return (
    <main className="min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-12 px-8 bg-secondary/30 flex flex-col">
      {children}
    </main>
  );
};

export default MainBody;
