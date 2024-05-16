import { Key } from "react";
import ReviewCard from "./components/ReviewCard";
import RecommendationList from "./components/RecommendationList";
import { getLatestReviews } from "./lib/data";

export default async function Home() {
  const latestReviews = await getLatestReviews();

  return (
    <section className="my-16 max-w-screen-lg mx-auto min-h-[60vh]">
      <h1 className="text-3xl text-center mb-10 text-[#582F0E]">Top 3 Recommended Cafés for You</h1>
      <RecommendationList />

      <hr className="my-10" />
      <h2 className="text-3xl text-center mb-10 text-[#582F0E]">Latest reviews</h2>
      <div className="grid gap-7">
        {latestReviews.map((review, index) => (
          <ReviewCard
            cafeName={review.cafename}
            location={review.formattedaddress}
            slug={"#"}
            imagePath={"/images/cafe_street.jpg"} // Image is still hardcoded as we don't have any values stored for it.
            starRating={review.starrating}
            comment={review.comments}
            beverage={review.coffeetype}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}