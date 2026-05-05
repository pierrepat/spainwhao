import { MetadataRoute } from "next";
import { rentals } from "@/data/properties";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spainwhao.com";

  const rentalPages = rentals.map((r) => ({
    url: `${base}/${r.slug}`,
    lastModified: new Date(),
    priority: 0.8 as const,
  }));

  const projectPages = projects.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: new Date(),
    priority: 0.6 as const,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      priority: 1,
    },
    ...rentalPages,
    ...projectPages,
  ];
}
