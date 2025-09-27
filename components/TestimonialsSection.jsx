import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Company Inc.",
      avatar: "https://github.com/shadcn.png",
      testimonial: "Ethox Media has been a game-changer for our business. Their team is knowledgeable, responsive, and dedicated to our success.",
    },
    {
      name: "Jane Smith",
      title: "Marketing Manager, Another Co.",
      avatar: "https://github.com/shadcn.png",
      testimonial: "We've seen a significant increase in our online presence since working with Ethox Media. Highly recommended!",
    },
    {
      name: "Sam Wilson",
      title: "Founder, Startup LLC",
      avatar: "https://github.com/shadcn.png",
      testimonial: "The new website they built for us is not only beautiful but also incredibly fast. Our conversion rates have skyrocketed.",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          </div>
        </div>
        <Carousel className="w-full max-w-4xl mx-auto py-12">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-lg font-medium">"{testimonial.testimonial}"</p>
                      <div className="mt-4 flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}