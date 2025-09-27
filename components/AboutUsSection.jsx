import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Ethox Media</h2>
              <p className="max-w-[600px] text-muted-foreground mx-auto md:text-xl/relaxed">
                We are a passionate team of developers, designers, and marketers who are dedicated to helping our clients succeed. We believe in building long-term relationships and delivering results that exceed expectations.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/image.jpg"
              width="600"
              height="400"
              alt="About Us"
              className="aspect-video w-full max-w-md overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}