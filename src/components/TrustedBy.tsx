const companies = [
  "Eidra",
  "NETFLIX",
  "convivio",
  "Booking.com",
  "Electrolux",
  "BCG",
  "Klarna.",
  "miro"
];

const TrustedBy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-semibold mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            The world's leading companies subscribe to circular furniture
          </h2>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold text-foreground/50 hover:text-foreground transition-all duration-300 hover:scale-110 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
