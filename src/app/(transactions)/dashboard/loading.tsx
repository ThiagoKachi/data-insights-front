export default function Loading() {
  return (
    <div role="status" className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4 animate-pulse">
          <div className="h-32 w-full bg-gray-200 rounded-md"></div>
          <div className="h-32 w-full bg-gray-200 rounded-md"></div>
          <div className="h-32 w-full bg-gray-200 rounded-md"></div>
          <div className="h-32 w-full bg-gray-200 rounded-md"></div>
        </div>

        <div className="grid gap-4 md:gap-8 animate-pulse">
          <div className="h-[540px] w-full bg-gray-200 rounded-md"></div>
        </div>
      </main>
    </div>
  );
}
