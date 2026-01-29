import { Target, Eye, Droplets, Building2, Home, Factory } from "lucide-react";

const solutions = [
  { icon: Building2, title: "Commercial Buildings", desc: "Large-scale waterproofing for offices and malls" },
  { icon: Home, title: "Residential Properties", desc: "Protecting homes from moisture damage" },
  { icon: Factory, title: "Industrial Facilities", desc: "Heavy-duty solutions for factories and warehouses" },
  { icon: Droplets, title: "Basements & Tanks", desc: "Underground and water storage waterproofing" },
  { icon: Target, title: "Bitumen Sheet Work", desc: "Comprehensive roof and terrace protection"},
  { icon: Eye, title: "Epoxy Work", desc: "Advanced treatments to enhance durability" },
  { icon: Building2, title: "Pressure grouting", desc: "Preventing cracks and water ingress" },
  { icon: Home, title: "Wall Crack Filling & Slab Leakage", desc: "Restoring structural integrity" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <span className="text-primary text-sm font-medium tracking-wide uppercase">
              About Company
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
             Company History

            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Shree Durga Enterprises has been in business for over ten years and
their success rate in this industry, Residential & Commercial Industry, speaks for
itself. With the continues research they did on the products they use in the industry,
the business has grown so much that they are in a position to provide a 10 year
guarantee on their workmanship.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of certified professionals uses only premium materials and proven techniques 
              to deliver results that exceed industry standards. From residential basements to 
              large commercial complexes, we have the expertise to handle projects of any scale.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To achieve their vision of becoming a preferred service provider,
                   the company focuses on strong leadership, excellent customer service, continuous innovation, and maintaining high-quality standards to stay competitive in the industry.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-lg border border-border">
                <Eye className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                 Shree Durga Enterprises wants to be the preferred service
provider in the Residential & Commercial Industries. They want to achieve this
by providing high quality products & services that will exceed the expectations
of their clients and stay competitively priced
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Solutions */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Waterproofing Solutions We Provide
            </h3>
            <div className="grid gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
