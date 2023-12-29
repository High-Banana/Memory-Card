export default function Loading() {
  return (
    <div className="flex justify-center items-center mt-[150px] gap-3">
      <div className="h-[50px] w-[50px] border-y-[4px] border-y-white border-x-transparent border-x-[4px] rounded-[50%] animate-spin"></div>
      <h1 className="text-white text-4xl font-bold">Loading</h1>
    </div>
  );
}
