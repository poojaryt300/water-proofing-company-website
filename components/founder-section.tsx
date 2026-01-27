import Image from "next/image";
import { Briefcase, Quote } from "lucide-react";

export function FounderSection() {
  return (
    <section id="founder" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4">
            Meet Our Founder
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <div className="relative flex justify-center">
            
            {/* Animated Ring */}
            <div className="relative w-60 h-60">
              <div className="absolute inset-0 rounded-full 
                bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 
                animate-spin-slow blur-[1px]" 
              />

              <div className="absolute inset-[6px] rounded-full bg-background" />

              <div className="absolute inset-[10px] rounded-full overflow-hidden">
                <Image
                  src="/images/ranjan.jpg"
                  alt="Ranjan Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 right-1/2 translate-x-1/2 lg:right-auto lg:left-8 bg-card p-4 rounded-lg border border-border shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-xs text-muted-foreground">
                    Years in Industry
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ranjan Kumar
            </h3>
            <p className="text-primary font-medium mb-6">
              Founder & Managing Director
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 7 years of hands-on experience in the construction and
              waterproofing industry, Ranjan Kumar founded Shree Durga Enterprises
              with a vision to revolutionize how structures are protected from
              water damage, working on major infrastructure projects across the
              country.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Under his leadership, Shree Durga Enterprises has grown from a
              small local contractor to a recognized name in the waterproofing
              industry, serving residential, commercial, and industrial clients.
            </p>

            {/* Quote */}
            <div className="bg-card p-6 rounded-lg border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground italic leading-relaxed">
                “Quality waterproofing is not an expense; it’s an investment in
                your structure’s future. We don’t just prevent leaks—we provide
                peace of mind.”
              </p>
              <p className="text-primary text-sm mt-4 font-medium">
                — Ranjan Kumar
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
