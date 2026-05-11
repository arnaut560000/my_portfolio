import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://arnaut.vercel.app"),
  title: "Arnaut Ezekiel Alfonso | Portfolio",
  description:
    "Portfolio of Arnaut Ezekiel Alfonso, a web developer building practical systems for operations, tracking, mapping, and automation.",
  openGraph: {
    title: "Arnaut Ezekiel Alfonso | Portfolio",
    description:
      "Practical web systems for operations, tracking, mapping, dashboards, and workflow tools.",
    url: "https://arnaut.vercel.app",
    siteName: "Arnaut Ezekiel Alfonso Portfolio",
    images: [
      {
        url: "https://arnaut.vercel.app/facebook-preview.png",
        width: 1734,
        height: 907,
        type: "image/png",
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
    images: ["https://arnaut.vercel.app/facebook-preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
