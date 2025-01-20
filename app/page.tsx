export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full shadow-md p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 -mb-2 font-semibold">
              In transit
            </span>
            <span className="text-4xl font-semibold">
              Coolblue
            </span>
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-full text-center">
            circle
          </div>
        </div>
        <div>
          <span>Today</span>
          <span>9:30-10:30</span>
        </div>
      </div>
    </main>
  );
}
