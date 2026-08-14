import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import hero from "@/assets/hero.jpg";
import { categories } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Verde — Menu" },
      {
        name: "description",
        content:
          "Explore our full menu: chef specials, appetizers, mains, burgers, stone-oven pizzas, desserts and craft drinks.",
      },
      { property: "og:title", content: "Maison Verde — Menu" },
      {
        property: "og:description",
        content:
          "Explore our full menu: chef specials, appetizers, mains, burgers, stone-oven pizzas, desserts and craft drinks.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    categories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Plated gourmet dish on a candlelit table at dusk"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
          <span className="text-[0.7rem] uppercase tracking-[0.45em] text-primary">
            Est. 1998
          </span>
          <h1 className="mt-6 font-display text-5xl font-light leading-none sm:text-7xl">
            Maison Verde
          </h1>
          <div className="mt-6 h-px w-16 bg-primary/60" />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            A seasonal kitchen and wine bar. Everything is prepared fresh each day —
            browse the full menu below.
          </p>
          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            Open daily · 12:00 – 23:00
          </p>
        </div>
      </header>

      <nav className="sticky top-0 z-20 border-y border-border bg-background/95 backdrop-blur">
        <ul className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={`inline-block whitespace-nowrap rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  active === c.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-5xl px-5 pb-24">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-20 pt-16">
            <div className="overflow-hidden rounded-sm border border-border">
              <img
                src={category.image}
                alt={category.label}
                width={900}
                height={900}
                loading="lazy"
                className="h-44 w-full object-cover sm:h-64"
              />
            </div>
            <div className="mt-6">
              <h2 className="font-display text-3xl font-light sm:text-4xl">
                {category.label}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{category.blurb}</p>
            </div>

            <ul className="mt-8 divide-y divide-border border-t border-border">
              {category.items.map((item) => (
                <li key={item.name} className="flex gap-4 py-5">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-xl font-normal">{item.name}</h3>
                      {item.tag && (
                        <span className="rounded-full border border-primary/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.2em] text-primary">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-lg text-primary">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <footer className="border-t border-border px-6 py-12 text-center">
        <p className="font-display text-2xl font-light">Maison Verde</p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          14 Rue des Oliviers · Reservations +1 (555) 018-2277
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Prices in USD. Please inform your server of any allergies.
        </p>
      </footer>
    </div>
  );
}
