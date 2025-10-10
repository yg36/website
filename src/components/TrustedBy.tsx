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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-12">
          The world's leading companies subscribe to circular furniture
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-2xl md:text-3xl font-bold text-foreground/60 hover:text-foreground transition-colors duration-300"
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
