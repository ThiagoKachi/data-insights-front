export default function Loading() {
  return (
    <div role="status" className="flex min-h-screen w-full flex-col">
      <main className="container mx-auto p-4 rounded-md my-[2%] animate-pulse">
        <div className="h-[600px] w-full bg-gray-200 rounded-md"></div>
      </main>
    </div>
  );
}
