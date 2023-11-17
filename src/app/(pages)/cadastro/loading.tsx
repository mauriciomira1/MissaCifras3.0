const Loading = () => {
  return (
    <div className="pb-10 h-screen animate-pulse flex md:justify-center md:flex-row flex-col justify-center items-center gap-8">
      <div className="h-56 w-64 bg-gray-300 rounded"></div>
      <div className="flex flex-col gap-3 items-center md:items-start">
        <div className="h-32 w-60 bg-gray-300 rounded"></div>
        <div className="h-12 w-56 bg-gray-300 rounded-full"></div>
        <div className="h-8 w-40 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
