import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Project One",
      description: "A description of the first project.",
      image: "/image.jpg",
    },
    {
      title: "Project Two",
      description: "A description of the second project.",
      image: "/image.jpg",
    },
    {
      title: "Project Three",
      description: "A description of the third project.",
      image: "/image.jpg",
    },
    {
      title: "Project Four",
      description: "A description of the fourth project.",
      image: "/image.jpg",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects we're proud of.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={project.image}
                width="600"
                height="400"
                alt={project.title}
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm">{project.description}</p>
                <Button variant="secondary" className="mt-4">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}