import { 
  Droplets, 
  Building, 
  Waves, 
  Shield, 
  Layers, 
  Wrench,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building,
    title: "Roof Waterproofing",
    description: "Complete roof protection using advanced membrane systems and coatings that withstand extreme weather conditions.",
  },
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    description: "Interior and exterior basement solutions to prevent water seepage and maintain a dry, healthy environment.",
  },
  {
    icon: Waves,
    title: "Terrace Waterproofing",
    description: "Specialized treatments for terraces and balconies to prevent water penetration and structural damage.",
  },
  {
    icon: Shield,
    title: "Toilet Waterproofing",
    description: "Specialized waterproofing solutions to prevent leakage, seepage, and moisture damage in bathrooms and toilets..",
  },
  {
    icon: Layers,
    title: "tank waterproofing",
    description: "Durable waterproofing treatments for water tanks to prevent leakage, contamination, and structural damage..",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Expert repair services for existing waterproofing systems and preventive maintenance programs.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Comprehensive Waterproofing Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From residential homes to large commercial complexes, we offer a full range of 
            waterproofing services tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
