import type { MetadataRoute } from "next";
import { news, slugify } from "@/lib/news";

const SITE_URL = "https://ucapitalfl.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const staticRoutes: MetadataRoute.Sitemap = [
		{ url: `${SITE_URL}/`, changeFrequency: "yearly", priority: 1 },
		{ url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${SITE_URL}/mission`, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${SITE_URL}/products`, changeFrequency: "monthly", priority: 0.8 },
		{
			url: `${SITE_URL}/transactions`,
			changeFrequency: "monthly",
			priority: 0.6,
		},
		{ url: `${SITE_URL}/news`, changeFrequency: "weekly", priority: 0.7 },
		{ url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.5 },
	];

	const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
		url: `${SITE_URL}/news/${slugify(item.title)}`,
		lastModified: new Date(item.date),
		changeFrequency: "yearly",
		priority: 0.4,
	}));

	return [...staticRoutes, ...newsRoutes];
}
