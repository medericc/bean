import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.histoirebearn.fr/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/histoire-condensee`,
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
   {
  url: `${baseUrl}/theologie/augustin`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/theologie/catherine`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/theologie/hildegarde`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/theologie/mariage`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/theologie/therese`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/theologie/thomasdaquin`,
  lastModified: new Date(),
},
  ];
}
