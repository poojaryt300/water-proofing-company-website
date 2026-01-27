import { Eye, Building2, Layers, Home, icons } from "lucide-react";

const buildings = [
  {
    title: "royal bawa",
    description: "Mangalore",
    icon: Layers,
  },
  {
    title: "Nina Percept Pvt Ltd",
    description: "Bangalore",
    icon: Building2,
  },
  {
    title: "CR Associates",
    description: "Pune",
    icon: Eye,
  },
  {
    title: "Bright Wave Project",
    description: "mangalore",
    icon: Home,
  },
  {
    title: "KK Construction",
    description: "Surathkal, Mangalore",
    icon: Layers,
  },
  {
    title: "Anagha Associates ",
    description: "Kavoor, Mangalore",
    icon: Building2,
  },
  {
    title: "CRMPL Metro park",
    description: "chennai",
    icon: Eye,
  },
  {
    title: "Build Wik Construction",
    description: "BC Road,Mangalore",
    icon: Home,
  },
];

export function BuildingsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 space-y-4">
        {buildings.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition"
            >
              <div className="p-2 rounded-lg bg-primary/20 text-primary">
                <Icon className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
