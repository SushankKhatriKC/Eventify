import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Create, Organize, Explore: Events in Our Platform</h1>
            <p className="p-regular-20 md:p-regular-24">
              Eventify is a powerful event management platform designed to help you create, organize, and promote unforgettable events.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/assets/images/hero1.webp"
              alt="hero1"
              width={1000}
              height={1000}
              className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            />
          </div>
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="h2-bold"> <br /> Where events come to life</h2>
      <div className="flex w-full flex-col gap-5 md:flex-row">
          Search
          CategoryFilter
        </div>
    </section>

     
    </>
  );
}