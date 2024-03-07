import CafeCard from "./components/CafeCard";

// Temporary list till we can connect to actual API requests with the ML model
const cafeSuggestions = [
  { name: 'Cafe 1', location: 'North Wollongong, NSW', slug: '#', imagePath: '/images/cafe_street.jpg'},
  { name: 'Cafe 2', location: 'Bellambi, NSW', slug: '#', imagePath: '/images/cafe_street.jpg'},
  { name: 'Cafe 3', location: 'Port Kembla, NSW', slug: '#', imagePath: '/images/cafe_street.jpg'},
];

export default async function Home() {
  return(
    <section className="mt-12 max-w-screen-lg mx-auto min-h-[60vh]">
      <h1 className="text-3xl font-semibold text-center mb-4 text-[#582F0E]">Top 3 Recommended Cafés for You</h1>
      <div className="flex gap-5">
        {cafeSuggestions.map((cafe, index) => (
          <CafeCard name={cafe.name} location={cafe.location} slug={cafe.slug} imagePath={cafe.imagePath} key={index}/>
        ))}
      </div>
    </section>
  );
}
