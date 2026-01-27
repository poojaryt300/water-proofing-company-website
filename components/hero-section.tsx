import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-waterproofing.jpg"
          alt="Professional waterproofing work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
            trusted Waterproofing Specialists
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Specialistin Water Proofing Work 
            <span className="text-primary block mt-2">& Construction Work</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Protecting your structures from water damage with cutting-edge technology 
            and over 7 years of industry expertise. We deliver reliability you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">7+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
