import TestimonialGrid from "@components/testimonialGrid";

export default function Home() {
  return (
    <main className="grid place-items-center h-screen">
      <section className="h-full bg-slate-100 w-full grid place-items-center">
        <TestimonialGrid />
      </section>
    </main>
  );
}
