import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Megaphone, Search, PenTool } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "We build modern, responsive, and high-performing websites that are tailored to your business needs.",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description: "Our data-driven marketing strategies will help you reach your target audience and grow your business online.",
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO",
      description: "We'll help you rank higher in search results and drive more organic traffic to your website.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Content Creation",
      description: "Our team of creative writers and designers will create compelling content that engages your audience.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a wide range of services to help you grow your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}