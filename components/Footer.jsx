import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ethox Media</h3>
            <p className="text-sm text-muted-foreground">
              A results-driven digital marketing and web development agency.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#services" className="text-sm hover:underline">Services</Link></li>
              <li><Link href="#portfolio" className="text-sm hover:underline">Portfolio</Link></li>
              <li><Link href="#about" className="text-sm hover:underline">About Us</Link></li>
              <li><Link href="#contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ethox Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}