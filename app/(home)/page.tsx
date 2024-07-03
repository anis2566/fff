import { Features } from "@/components/home/feature";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { PopularCourses } from "@/components/home/popular-courses";
import { Reviews } from "@/components/home/reviews";

export default function Home() {
  return (
    <main className="w-full space-y-[80px] mb-20">
      <Hero />
      <PopularCourses />
      <Features />
      <Reviews />
      <Newsletter />
    </main>
  );
}
