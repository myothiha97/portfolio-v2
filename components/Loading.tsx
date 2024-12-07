const Loading = () => {
  return (
    <div className="pt-72 flex justify-center">
      <div className="flex flex-col gap-4 justify-center">
        <h1 className="text-2xl font-bold text-center">Loading</h1>
        <div className="loader rounded-lg" />
      </div>
    </div>
  );
};

export default Loading;
