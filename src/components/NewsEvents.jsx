import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// TEMP DATA (later replace with API)
const newsData = [
  {
    id: 1,
    title: "Gollege Beutification",
    date: "",
    description:
      "Our college has undergone a stunning transformation with new landscaping, vibrant murals, and modern facilities, creating an inspiring environment for students and staff alike.",
    image: "../assets/clg-beuty.png",
    link: "/news/admissions-2025",
  },
  {
    id: 2,
    title: "International Conference on AI",
    date: "02 Sep 2025",
    description:
      "Join leading researchers at our international AI conference.",
    image: "/assets/news2.jpg",
    link: "/events/ai-conference",
  },
  {
    id: 3,
    title: "Annual Sports Gala 2025",
    date: "20 Oct 2025",
    description:
      "A week-long sports gala featuring teams from all departments.",
    image: "/assets/news3.jpg",
    link: "/events/sports-gala",
  },
];

const NewsEventsCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            College Gallery
          </h2>
          <p className="text-muted-foreground mt-2">
            A glimpse into our vibrant campus life and recent events.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-xl h-[420px]">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/60" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-6 md:px-12 max-w-2xl text-white">
                  <span className="text-sm uppercase tracking-wide text-gray-300">
                    {item.date}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-200 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsCarousel;
