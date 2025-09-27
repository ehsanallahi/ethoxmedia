import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const posts = [
    {
      title: "The Future of Web Development",
      description: "A look at the latest trends and technologies shaping the future of the web.",
      image: "/image.jpg",
      href: "/blog/future-of-web-development",
    },
    {
      title: "10 Digital Marketing Tips for 2025",
      description: "Stay ahead of the curve with these expert tips for digital marketing success.",
      image: "/image.jpg",
      href: "/blog/10-digital-marketing-tips",
    },
    {
      title: "Why Your Business Needs a Website",
      description: "In today's digital world, a website is more important than ever. Here's why.",
      image: "/image.jpg",
      href: "/blog/why-you-need-a-website",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From the Blog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Stay up to date with the latest industry news and insights.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col">
              <Image
                src={post.image}
                width="600"
                height="400"
                alt={post.title}
                className="aspect-video w-full rounded-t-lg object-cover"
              />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link href={post.href}>
                  <Button variant="link" className="p-0 h-auto">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}