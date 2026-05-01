import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://luxury-nasturtium-1af21d.netlify.app"),
  title: "Arnaut Ezekiel Alfonso | Portfolio",
  description:
    "Portfolio of Arnaut Ezekiel Alfonso, a web developer building practical systems for operations, tracking, mapping, and automation.",
  openGraph: {
    title: "Arnaut Ezekiel Alfonso | Portfolio",
    description:
      "Practical web systems for operations, tracking, mapping, dashboards, and workflow tools.",
    url: "https://luxury-nasturtium-1af21d.netlify.app",
    siteName: "Arnaut Ezekiel Alfonso Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnaut Ezekiel Alfonso web developer portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnaut Ezekiel Alfonso | Portfolio",
    description:
      "Practical web systems for operations, tracking, mapping, dashboards, and workflow tools.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
