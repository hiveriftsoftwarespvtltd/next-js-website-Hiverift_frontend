import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { WhatsAppButton } from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";

import { combinedJsonLdSchema } from "./config/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiverift.com"),
  title: "HiveRift - Premier Software Engineering & Digital Agency (India)",
  description:
    "HiveRift is a premier software engineering agency in New Delhi, India. We specialize in custom web apps, mobile applications, AI/ML, and cloud solutions.",
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
        {/* Strip third-party extension attributes before React hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                const removeExtensionAttrs = (node) => {
                  if (node.nodeType === 1 && node.hasAttribute('bis_skin_checked')) {
                    node.removeAttribute('bis_skin_checked');
                  }
                  if (node.childNodes) {
                    node.childNodes.forEach(removeExtensionAttrs);
                  }
                };
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((m) => {
                    if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                      m.target.removeAttribute('bis_skin_checked');
                    } else if (m.type === 'childList') {
                      m.addedNodes.forEach(removeExtensionAttrs);
                    }
                  });
                });
                if (document.documentElement) {
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    childList: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                }
              })();
            `,
          }}
        />
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
            })(window,document,'script','dataLayer','GTM-TQM5WMT6');
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

      <body className={`antialiased ${inter.variable}`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQM5WMT6"
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
        <WhatsAppButton />
      </body>
    </html>
  );
}