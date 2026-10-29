import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

const routes: {
  path: string;
  priority: number;
  changeFrequency: "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/owa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/medbooks", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path === "/" ? "" : route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
