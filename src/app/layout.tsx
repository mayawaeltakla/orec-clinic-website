import type { Metadata } from "next";
import { Tajawal, Manrope } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // Title & description are rendered language-aware from the client tree (see src/app/page.tsx)
  keywords: [
    "Orec Clinic",
    "عيادة أوريك",
    "زراعة الأسنان",
    "ابتسامة هوليود",
    "جراحات تجميلية",
    "زراعة الشعر",
    "إسطنبول",
    "Dental implants Istanbul",
  ],
  // Favicon: src/app/icon.png (the Orec "O" mark) is served via the app-router file convention
};

// Applies the saved day/night theme before first paint to avoid a flash of the wrong theme
const themeInitScript = `try{if(localStorage.getItem('orec-theme')!=='dark')document.documentElement.classList.add('light')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${tajawal.variable} ${manrope.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
