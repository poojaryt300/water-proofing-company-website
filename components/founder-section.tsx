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

          {/* IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* Blue Glow */}
            <div className="absolute inset-0 flex justify-center">
              <div
                className="w-[260px] h-[280px] rounded-[50%]
                bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-600
                blur-xl opacity-70"
              />
            </div>

            {/* Image */}
            <div
              className="relative w-[260px] h-[280px] rounded-[50%]
              overflow-hidden border-4 border-black bg-background z-10"
            >
              <Image
                src="/images/ranjan.jpg"
                alt="Ranjan Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Experience Card */}
            <div
              className="absolute bottom-6 z-20 bg-card px-5 py-3 rounded-xl
              border border-border shadow-lg flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xl font-bold text-primary">10+</p>
                <p className="text-xs text-muted-foreground">
                  Years in Industry
                </p>
              </div>
            </div>

          </div>

          {/* CONTENT SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Ranjan Kumar
            </h3>
            <p className="text-primary font-medium mb-6">
              Founder & Managing Director
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 10 years of hands-on experience in the construction and
              waterproofing industry, Ranjan Kumar founded Shree Durga Enterprises
              with a vision to revolutionize how structures are protected from
              water damage.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Under his leadership, Shree Durga Enterprises has grown from a
              small local contractor to a recognized industry name.
            </p>

            {/* Quote */}
            <div className="bg-card p-6 rounded-lg border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground italic leading-relaxed">
                “Quality waterproofing is not an expense; it’s an investment in
                your structure’s future.”
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
