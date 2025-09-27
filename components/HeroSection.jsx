import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Unlock Your Digital Potential with Ethox Media
              </h1>
              <p className="max-w-[600px] text-muted-foreground mx-auto md:text-xl">
                We are a results-driven digital marketing and web development agency, committed to helping you grow your business and succeed online.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row justify-center">
              <Button size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/hero.jpeg"
              width="600"
              height="400"
              alt="Hero Image"
              className="aspect-video w-full max-w-md overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}