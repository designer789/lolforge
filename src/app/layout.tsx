import type { Metadata } from "next";
import { Press_Start_2P, Roboto_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lol.Forge",
  description: "League of Legends builder application",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/favicon.png',
        type: 'image/png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${robotoMono.variable} antialiased bg-[#1a1a1a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
