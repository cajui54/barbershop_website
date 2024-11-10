import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Cabin } from "next/font/google";
export const metadata: Metadata = {
  title: "Destak Barbershop / Login",
  description: "Gerenciador de uma barbearia",
  icons: {
    icon: ["./logo.png"],
    apple: ["./logo.png"],
    shortcut: ["./logo.png"],
  },
};

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  weight: ["100", "700", "900"],
  style: ["normal"],
  variable: "--font-montserrat",
});
const cabin = Cabin({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  variable: "--font-cabin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} ${cabin.variable}`}>
        {children}
      </body>
    </html>
  );
}
