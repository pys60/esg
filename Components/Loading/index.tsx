import Logo from "../SVG/Logo";

const Loading = () => {
  return (
    <div className="h-[100vh] gap-[1rem] flex-col w-full flex items-center justify-center bg-black text-white">
      <Logo className="h-[40px] w-auto" />
      <p className="text-[18px] font-bold">Loading...</p>
    </div>
  );
};

export default Loading;
