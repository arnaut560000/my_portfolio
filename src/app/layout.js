import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://arnaut.vercel.app"),
  alternates: { canonical: "/" },
  title: "Arnaut Ezekiel Alfonso | Web Developer & Government Systems",
  description:
    "Web developer with government programming experience in Talavera, Nueva Ecija. Explore dental scheduling, offline records, and mapping projects built with Python, Flask, Supabase, and Render.",
  openGraph: {
    title: "Arnaut Ezekiel Alfonso | Portfolio",
    description:
      "Government programming experience, municipal scheduling systems, offline applications, and mapping tools by Arnaut Ezekiel Alfonso.",
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
      "Government programming experience, municipal scheduling systems, offline applications, and mapping tools by Arnaut Ezekiel Alfonso.",
    images: ["https://arnaut.vercel.app/facebook-preview.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
