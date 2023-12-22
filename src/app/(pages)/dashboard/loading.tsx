const Loading = () => {
  return (
    <div className="flex h-screen w-full max-w-6xl animate-pulse flex-col items-center gap-4 px-4">
      <div className="mx-4 my-5 mt-16 flex h-20 w-full flex-col justify-center gap-3 rounded-md">
        <div className="h-6 w-32 space-x-2 rounded-md bg-gray-300"></div>
        <div className="h-8 w-52 space-x-2 rounded-md bg-gray-300"></div>
      </div>
      <div className="mt-3 w-full rounded bg-gray-300 py-14"></div>
      <div className="flex w-full gap-3">
        <div className="h-28 w-1/3 rounded bg-gray-300"></div>
        <div className="h-28 w-1/3 rounded bg-gray-300"></div>
        <div className="h-28 w-1/3 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Loading;
