import { industriesData } from "@/app/data/industries";

export async function generateMetadata({ params }: { params: Promise<{ industryId: string }> }) {
  const { industryId } = await params;
  const industry = (industriesData as any)[industryId];
  
  return {
    title: `${industry?.title || "Industry"} Digital Solutions & Technology | HiveRift`,
    description: industry?.description || "High-performance custom web development, software engineering, and digital growth solutions tailored for your industry.",
    alternates: {
      canonical: `https://hiverift.com/industries/${industryId}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
