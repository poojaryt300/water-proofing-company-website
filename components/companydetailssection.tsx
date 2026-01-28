export function CompanyDetailsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Company Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Company Info */}
          <div className="rounded-xl border border-border p-6 bg-muted/30">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><strong>Industry:</strong> Services of Civil Construction</li>
              <li><strong>Year of Establishment:</strong> 2015</li>
              <li><strong>Legal Status:</strong> Proprietorship</li>
              <li><strong>Promoter:</strong> Ranjan Kumar, Mangalore</li>
              <li><strong>Total Employees:</strong> 24 Nos</li>
            </ul>
          </div>

          {/* Turnover */}
          <div className="rounded-xl border border-border p-6 bg-muted/30">
            <h3 className="text-xl font-semibold mb-4">Annual Turnover</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>2019 – 20 : ₹25,32,102</li>
              <li>2020 – 21 : ₹35,08,374</li>
              <li>2021 – 22 : ₹38,15,392</li>
            </ul>
          </div>

          {/* Team & Staff */}
          <div className="md:col-span-2 rounded-xl border border-border p-6 bg-muted/30">
            <h3 className="text-xl font-semibold mb-4">Team & Staff</h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-background border">
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">
                  Research / QC Staff
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background border">
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">
                  Engineers & Technicians
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background border">
                <p className="text-2xl font-bold">10</p>
                <p className="text-sm text-muted-foreground">
                  Skilled Staff
                </p>
              </div>

              <div className="p-4 rounded-lg bg-background border">
                <p className="text-2xl font-bold">10</p>
                <p className="text-sm text-muted-foreground">
                  Semi-Skilled Staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
