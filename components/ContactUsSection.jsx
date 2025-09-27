import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUsSection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4 py-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Textarea placeholder="Message" rows={5} />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}