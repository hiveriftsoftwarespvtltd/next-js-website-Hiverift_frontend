import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";
import { FloatingActions } from "./components/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

import { combinedJsonLdSchema } from "./config/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiverift.com"),
  title: "Website Development Company in Delhi NCR, Noida & Gurgaon | HiveRift",
  description:
    "Web development company in Delhi NCR, Noida & Gurgaon. Custom websites, eCommerce, SaaS, and AI solutions for growth-focused businesses.",
  keywords: [
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
    "Website Development Company in Gurgaon",
    "Website Design Company in Gurgaon",
    "Web Development Company in Gurgaon",
    "Website Developer in Gurgaon",
    "Web Design Agency in Gurgaon",
    "Custom Website Development in Gurgaon",
    "Affordable Website Development in Gurgaon",
    "WordPress Website Development Company in Gurgaon",
    "Website Development Company in Cyber City Gurgaon",
    "Website Development Company in Udyog Vihar Gurgaon",
    "KhatuShyam Technologies"
  ],
  alternates: {
    canonical: "https://hiverift.com",
    languages: {
      "en-IN": "https://hiverift.com",
      "en-US": "https://hiverift.us",
      "x-default": "https://hiverift.com",
    },
  },
  openGraph: {
    title: "HiveRift - Premier Software Engineering & Digital Agency",
    description:
      "HiveRift delivers custom software development, mobile apps, AI/ML solutions, and digital growth services.",
    url: "https://hiverift.com",
    siteName: "HiveRift",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://hiverift.com/logo.png",
        width: 800,
        height: 600,
        alt: "HiveRift - Premier Software Engineering & Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HiveRift - Premier Software Engineering & Digital Agency",
    description:
      "Custom web development, eCommerce platforms, mobile apps, and digital growth marketing.",
    images: ["https://hiverift.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head suppressHydrationWarning>
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {
              if(f.fbq)return;
              n=f.fbq=function(){
                n.callMethod
                  ? n.callMethod.apply(n,arguments)
                  : n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n;
              n.loaded=!0;
              n.version='2.0';
              n.queue=[];
              t=b.createElement(e);
              t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s);
            }(
              window,
              document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js'
            );

            fbq('init', '2034288817486971');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FL7L7KBZRR"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FL7L7KBZRR');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });

              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';

              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GT-PLHSKGK5');
          `}
        </Script>

        {/* Schema.org Structured Data (JSON-LD) - Unified Graph */}
        <script
          id="hiverift-schema-graph"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(combinedJsonLdSchema),
          }}
          suppressHydrationWarning
        />
      </head>

      <body className={`antialiased font-sans ${plusJakartaSans.variable} ${plusJakartaSans.className}`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-PLHSKGK5"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2034288817486971&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ScrollToTop />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}