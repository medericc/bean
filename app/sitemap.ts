import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bearn.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/histoire`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/lignees`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/vicomtes`,
      lastModified: new Date(),
    },
     {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
    },
   
  ];
}
