import { Metadata } from "next";
import LocationsContent from "./LocationsContent";

export const metadata: Metadata = {
  title: "Locations We Serve | Delhi, Noida & Gurgaon Web Development Agency | HiveRift",
  description:
    "HiveRift provides enterprise web development, custom Next.js engineering, website design, and digital solutions across 30+ micro-markets in Delhi, Noida, and Gurgaon.",
  keywords: [
    // Delhi (10)
    "Web Development Company in Delhi",
    "Website Design Company in Delhi",
    "Website Developer in Delhi",
    "Web Design Agency in Delhi",
    "Custom Website Development in Delhi",
    "Affordable Website Development in Delhi",
    "WordPress Website Development Company in Delhi",
    "Business Website Development in Delhi",
    "Website Development Company in South Delhi",
    "Website Development Company in Dwarka",

    // Noida (10)
    "Website Development Company in Noida",
    "Website Design Company in Noida",
    "Web Development Company in Noida",
    "Website Developer in Noida",
    "Web Design Agency in Noida",
    "Custom Website Development in Noida",
    "Affordable Website Development in Noida",
    "WordPress Website Development Company in Noida",
    "Website Development Company in Sector 62 Noida",
    "Website Development Company in Sector 18 Noida",

    // Gurgaon / Gurugram (10)
    "Website Development Company in Gurgaon",
    "Website Design Company in Gurgaon",
    "Web Development Company in Gurgaon",
    "Website Developer in Gurgaon",
    "Web Design Agency in Gurgaon",
    "Custom Website Development in Gurgaon",
    "Affordable Website Development in Gurgaon",
    "WordPress Website Development Company in Gurgaon",
    "Website Development Company in Cyber City Gurgaon",
    "Website Development Company in Udyog Vihar Gurgaon"
  ],
  openGraph: {
    title: "Locations We Serve | Delhi, Noida & Gurgaon Web Development Agency | HiveRift",
    description:
      "Enterprise custom web development and Next.js architecture for businesses across Delhi, Noida Sector 62, and DLF Cyber City Gurgaon. In-person consultations are available at our New Delhi office.",
    url: "https://hiverift.com/locations",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://hiverift.com/delhi-ncr-network-map.png",
        width: 1024,
        height: 341,
        alt: "HiveRift Delhi NCR Service Matrix Map"
      }
    ]
  },
  alternates: {
    canonical: "https://hiverift.com/locations"
  }
};

export default function LocationsPage() {
  return <LocationsContent />;
}
