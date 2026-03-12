export default function MarqueeTicker() {
  const items = [
    "500+ Jobs Completed",
    "47 Five-Star Reviews",
    "Same-Day Service",
    "ESA #7014710",
    "15+ Years Experience",
    "100% Licensed & Insured",
    "Brampton's Most Trusted",
    "Free Remote Estimates",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#1B4FE4] py-3 overflow-hidden">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeated.map((text, i) => (
          <span
            key={i}
            className="font-heading text-xs uppercase tracking-[0.2em] font-bold text-white/90 flex items-center gap-8"
          >
            {text}
            <span className="text-white/40">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
