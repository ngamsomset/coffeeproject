import CafeCard from "./components/CafeCard";

export default async function Home() {
  return(
    <section className="mt-12 max-w-screen-lg mx-auto min-h-[60vh]">
      <h1 className="text-3xl font-semibold text-center mb-4 text-[#582F0E]">Top 3 Recommended Cafés for You</h1>
      <div className="flex gap-5">
        <CafeCard/>
        <CafeCard/>
        <CafeCard/>
      </div>
    </section>
  );
}
