import Image from "next/image";
import { MapPin } from "lucide-react";

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "Chathrapal Surface",
    location: "Mumbai, Maharashtra",
    
  },
  {
    image: "/images/project-2.jpg",
    title: "Namko Builder",
    location: " Statebank, Mangalore",
    
  },
  {
    image: "/images/project-3.jpg",
    title: "Relebel heights",
    location: "Paduva, Mangalore",
   
  },
  {
    image: "/images/project-4.jpg",
    title: "Souza Builder- Agnes",
    location: "mangalore, Karnataka",
    category: "roof Waterproofing",
    area: "8,000 sq. ft.",
  },
  {
    image: "/images/project-5.jpg",
    title: "Arnava homes",
    location: "Mukka, Mangalore",
  },
  {
    image: "/images/project-6.jpg",
    title: "Arnava Kuruamba",
    location: "Mangalore, Karnataka",
    
  },
  {
    image: "/images/project-7.jpg",
    title: "Arnava Builder",
    location: "Mangalore, Karnataka",
  },
  {
    image: "/images/project-8.jpg",
    title: "Arnava Builder",
    location: "Mangalore, Karnataka",
  },
  {
    image: "/images/project-9.jpg",
    title: "K2K prestige",
    location: "deralakatte, Mangalore",
  },
  {
    image: "/images/project-10.jpg",
    title: "K2K prestige",
    location: "deralakatte, Mangalore",
  },
  {
    image: "/images/project-11.jpg",
    title: "Byndoor palace",
    location: "Byndoor, Mangalore",
  },
 
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our completed waterproofing projects across various sectors. 
            Each project showcases our commitment to quality and excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border"
            >
              <div className="aspect-[16/10] relative w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span>{project.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
