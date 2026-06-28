import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageProvider";
import SiteChrome from "@/components/SiteChrome";
import SiteFooter from "@/components/SiteFooter";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "SEA LLC — წყლის დამუშავება, დეზინფექცია და სამრეწველო აღჭურვილობა",
    template: "%s — SEA LLC",
  },
  description:
    "შპს სეა — წყლის სადეზინფექციო და დამუშავების სისტემები, ქიმიური, სამედიცინო და სამრეწველო აღჭურვილობა. წამყვანი მწარმოებლების ოფიციალური წარმომადგენელი საქართველოში.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ka">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+Georgian:wght@400;500;600;700;800&family=Noto+Serif+Georgian:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Preloader />
        <LanguageProvider>
          <SiteChrome />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
